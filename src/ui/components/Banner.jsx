import React, { useContext, useEffect } from 'react'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import { com } from "../../ui"
import { SearchContext } from '../../SearchContext.js'
import { useTheme, useMediaQuery } from '@mui/material';

const Banner = ({numResults, handleSearchEngine, isLoading}) => {

const { resultType, resultTerm, errorMessage, setErrorMessage } = useContext(SearchContext)

//TO CUSTOMIZE TYPOGRAPHY BASED ON SCREEN SIZE
const theme = useTheme();
const isXtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
const isMobileScreen = useMediaQuery("(max-width: 414px)")

//BANNER TEXT VALUE FOR ZIPS
const zipSearchTerm = resultTerm.substring(0,5) + " to " +  resultTerm.substring(6, 12);

// when the search form is loading, set the error message back to default (false)
useEffect(() => {
    setErrorMessage(errorMessage);
}, [isLoading]);

const getVariant = () => {
  if (isXtraSmallScreen) {
    return 'subtitle2'
  }
  if (isSmallScreen) {
    return 'subtitle1';
  }
  if (isMediumScreen) {
    return 'h4'
  }
  if (isLargeScreen){
    return 'h2'
  }
  return 'h2';
};


  return (
    <div>
      <Card sx={{backgroundColor:'var(--gamboge)', marginTop: '50px', maxWidth: '100%'}}>
        {/* SEARCH FORM TO CONTINUE TO ACCESS DATA FROM THE THREE ENDPOINTS */}
        {isMobileScreen ? (<div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', marginTop: '15px'}}>
          <com.MobileSearchForm handleSearchEngine={handleSearchEngine}/>
        </div>) : (<div style={{display: 'flex',justifyContent:'center', marginTop: '15px'}}>
          <com.SearchForm handleSearchEngine={handleSearchEngine}/>
        </div>)}

        <Stack 
          direction="row" 
          spacing={25} 
          sx={{ display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'end', 
              backgroundColor: 'var(--gamboge)', 
              color: 'white', 
              textShadow: '1px 1px 2px black', 
              whiteSpace:'nowrap',
            }}
        >
        { numResults == 0 ? ( 
          //BLANK IF RESPONSE WAS ERROR
          <div style={{padding: '40px'}}>

          </div> ) : (
          (resultType ==='zip' || resultType==='state') ? (
            (numResults <= 1 ? ( <>
        <Typography
          variant={getVariant()}
          sx={{
          fontFamily: `'Mallanna', sans-serif`,
          paddingRight: '10px'
          }}
        >
          Result for {resultTerm}
        </Typography>

        <Typography
          variant={isSmallScreen ? 'subtitle1' : 'h5'}
          sx={{ fontFamily: `'Mallanna', sans-serif` }}
        >
          Showing {numResults} result
        </Typography>
        </>) : ( <>
        <Typography
          variant={getVariant()}
          sx={{
          fontFamily: `'Mallanna', sans-serif`,
          padding: '10px'
          }}
        >
          Results for {resultTerm}
        </Typography>
        
      {isMobileScreen ? ( <div><Typography
          variant={isSmallScreen ? 'subtitle1' : 'h5'}
          sx={{ fontFamily: `'Mallanna', sans-serif`}}
        >
          Showing {numResults} results
        </Typography></div>) : ( <Typography
          variant={isSmallScreen ? 'subtitle1' : 'h5'}
          sx={{ fontFamily: `'Mallanna', sans-serif` }}
        >
          Showing {numResults} results
        </Typography>)}
       
        </>))
       ): (
          <>
        <Typography
          variant={getVariant()}
          sx={{
          fontFamily: `'Mallanna', sans-serif`,
          padding: '50px',
          }}
        >
          Results for {zipSearchTerm}
        </Typography>

        <Typography
          variant={isSmallScreen ? 'subtitle1' : 'h5'}
          sx={{ fontFamily: `'Mallanna', sans-serif` }}
        >
        </Typography>
        </>
        )

        )}
        </Stack>
      </Card>
    </div>)
}

export default Banner
