import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import { SearchContext } from '../../SearchContext.js'

const Banner = () => {

    const { searchType, setSearchType, searchTerm, setSearchTerm } = useContext(SearchContext)

    const zipSearchTerm = searchTerm.substring(0,5) + " to " +  searchTerm.substring(6, 11);

    return (
        <div>
            <Card sx={{maxWidth: '100%'}}>
            <Stack direction="row" spacing={25} sx={{display: 'flex', justifyContent: 'space-between',alignItems: 'end', padding: '40px', backgroundColor: 'var(--gamboge)', color: 'white', textShadow: '1px 1px 2px black', whiteSpace:'nowrap'}}>

                {(searchType ==='zip' || searchType==='city') ? (<Typography variant='h3' sx={{fontFamily: `'Mallanna', sans-serif`, padding: '10px'}}>Results for {searchTerm}</Typography>) : (<Typography variant='h3' sx={{fontFamily: `'Mallanna', sans-serif`, padding: '10px'}}>Results for {zipSearchTerm}</Typography>)}
                


                <Typography variant='h5' sx={{fontFamily: `'Mallanna', sans-serif`}}> Showing 103 results</Typography>
            </Stack>
            </Card>
        </div>)
}

export default Banner
