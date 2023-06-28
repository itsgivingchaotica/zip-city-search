import React, { useContext, useEffect } from 'react'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import { com } from "../../ui"
import { SearchContext } from '../../SearchContext.js'

const Banner = ({numResults, handleSearchEngine, isLoading}) => {

    const { searchType, searchTerm, resultType, resultTerm, errorMessage, setErrorMessage } = useContext(SearchContext)

    const zipSearchTerm = resultTerm.substring(0,5) + " to " +  resultTerm.substring(6, 12);
    console.log("🚀 ~ file: Banner.jsx:12 ~ Banner ~ zipSearchTerm:", zipSearchTerm);

    //when the search form is loading, set the error message back to false
    useEffect(() => {
        setErrorMessage(errorMessage);
    },[isLoading]);
    

    return (
        <div>
            <Card sx={{maxWidth: '100%', backgroundColor:'var(--gamboge)', marginTop: '50px'}}>
             {/* SEARCH FORM TO CONTINUE TO ACCESS DATA FROM THE THREE ENDPOINTS */}
              <div style={{display: 'flex',justifyContent:'center', marginTop: '15px'}}>
              <com.SearchForm handleSearchEngine={handleSearchEngine}/>
              </div>
              <Stack direction="row" spacing={25} sx={{display: 'flex', justifyContent: 'space-between',alignItems: 'end', backgroundColor: 'var(--gamboge)', color: 'white', textShadow: '1px 1px 2px black', whiteSpace:'nowrap'}}>

              { numResults == 0 ? ( <div style={{padding: '40px'}}></div> ) : (

(resultType ==='zip' || resultType==='state') ? 
                
                (
                  <>
                    <Typography 
                      variant='h3' 
                      sx={{fontFamily: `'Mallanna', sans-serif`, padding: '10px'}}>
                        Results for {resultTerm}
                    </Typography> 
                    
                    <Typography 
                      variant='h5' 
                      sx={{fontFamily: `'Mallanna', sans-serif`}}>
                        Showing {numResults} results</Typography>
                    
                    </> 
                    
                ) : (
                    <>
                      <Typography 
                        variant='h3' 
                        sx={{fontFamily: `'Mallanna', sans-serif`, padding: '10px'}}>
                          Results for {zipSearchTerm}
                      </Typography> 

                      <Typography 
                        variant='h5' 
                        sx={{fontFamily: `'Mallanna', sans-serif`}}>
                      </Typography>
                      </>
                )

              )}
              </Stack>
            </Card>
        </div>)
}

export default Banner
