import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { ErrorBoundary } from 'react-error-boundary'
import { com } from "../../ui"
import '../../styles/results.css'

import { SearchContext } from "../../SearchContext.js"

export default function Results({handleSearchEngine}) {

const { searchType, setSearchType, resultsData, setResultsData, resultType, resultTerm } = useContext(SearchContext);

const [zipcodeData, setZipcodeData] = useState([])
const [stateData, setStateData] = useState([])
const [distanceData, setDistanceData] = useState([])
const [error, setError] = useState(null);

  useEffect(() => {
  try {
    if (resultType === 'zip') {
      const mappedData = Object.keys(resultsData).map((key) => resultsData[key]);
      setZipcodeData(mappedData);
    } else if (resultType === 'state') {
      const mappedData = Object.keys(resultsData).map((key) => resultsData[key]);
      setStateData(mappedData);
    } else if (resultType === 'distance') {
      const mappedData = Object.keys(resultsData).map((key) => resultsData[key]);
      setDistanceData(mappedData);
    }
  } catch (error) {
    setError(error);
  }
}, [resultsData]);

    return (
       <ErrorBoundary
      fallbackRender={({ error }) => (
            <div>
            <h2>Something went wrong:</h2>
            <p>{error.message}</p>
            </div>
        )}>
        <div className="results">
          <div id="root">

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 10, md: 15 }} sx={{justifyContent: "center", paddingTop: '60px', maxWidth: '100%'}}>
              
               {/* SEARCH FORM TO CONTINUE TO ACCESS DATA FROM THE THREE ENDPOINTS */}
              <div style={{transform:'translateY(100%)',display:'flex', marginLeft: '50px', marginBottom: '20px', padding: '10px', backgroundColor: 'var(--gamboge)', maxWidth: '100%', borderRadius:'5px 5px 5px 5px'}}>
              <com.SearchForm handleSearchEngine={handleSearchEngine}/>
             </div>


            <Grid item xs={15} sx={{marginTop: '30px', maxWidth: '100%'}}>
            {/* BANNER DISPLAYS THE SEARCH TERM AND NUMBER OF RESULTS */}
            {resultType === 'zip' && (
              <com.Banner numResults={zipcodeData.length}/>
            )}
            {resultType === 'state' && (
              <com.Banner numResults={stateData.length}/>
            )}
            {resultType === 'distance' && (
              <com.Banner />
            )}
            </Grid>
            {/* ZIPCODE SEARCH --> DETAILED QUERY OF CITY ASSOCIATED WITH THE ZIPCODE */}
          {resultType === 'zip' && (
            zipcodeData.map((item) => (
  <Grid item xs={5} id={item.ID} >
    <com.ResultCard key={item.ID} zipcodeResult={item}/>
  </Grid>
)))}
            {resultType === 'state' && (
              <Grid item xs={2} sm={8} md={12} xl={12}>
                <com.ZipList stateResult={stateData}/>
              </Grid>
            )}
          
          {/* {searchType === 'state' && (
            stateData.map((item) => (
              <Grid item xs={5} key={id}>
                <com.ZipList stateResult={item}/> 
              </Grid>
            )))} */}
            
            
            {resultType === 'distance' && (
              <Grid item xs={5}>
                <com.DistanceCard distanceResult={distanceData}/> 
              </Grid>
            )}
          {/* <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid> */}
            {/* <Grid item xs={5}>
              <com.DistanceCard/>
            </Grid> */}
          {/* ))} */}
    </Grid>
            
        </div>
        </div>
        </ErrorBoundary>
    )
        
}