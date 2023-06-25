import React from 'react'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"

const Banner = () => {

    //

    return (
        <div>
            <Card>
            <Stack direction="row" spacing={25} sx={{display: 'flex', justifyContent: 'space-between',alignItems: 'end', padding: '40px', backgroundColor: 'var(--gamboge)', color: 'white', textShadow: '1px 1px 2px black', whiteSpace:'nowrap', }}>
                <Typography variant='h3' sx={{fontFamily: `'Mallanna', sans-serif`, padding: '10px'}}>Results for 10002</Typography>
                <Typography variant='h5' sx={{fontFamily: `'Mallanna', sans-serif`}}>103 items</Typography>
            </Stack>
            </Card>
        </div>)
}

export default Banner
