import React, { useContext, useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { ErrorBoundary } from 'react-error-boundary'
import { com } from "../../ui"
import '../../styles/results.css'

import { SearchContext } from "../../SearchContext.js"

export default function Results({handleSearchEngine}) {

const { searchType, setSearchType, resultsData, setResultsData, resultType, resultTerm, errorMessage, isLoading } = useContext(SearchContext);

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
    )}
  >
    <div className="results">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 10, md: 15 }}
        sx={{
          justifyContent: "center",
          paddingTop: '60px',
          maxWidth: '100%',
          paddingBottom: '100px'
        }}
      >
        

        {errorMessage ? (
          <Grid item xs={15} sx={{ marginTop: '30px', maxWidth: '100%' }}>
           <com.Banner
              key="zip-banner"
              numResults='0'
              handleSearchEngine={handleSearchEngine}
            />

          <Grid container sx={{ display: 'flex', justifyContent: 'center'}}>
         <Grid item xs={12}>
            <com.ErrorMessage/>
          </Grid>
          </Grid>
          </Grid>
        ) : (
          <>
          <Grid item xs={15} sx={{ marginTop: '30px', maxWidth: '100%' }}>
          {/* BANNER DISPLAYS THE SEARCH TERM AND NUMBER OF RESULTS */}
          {resultType === 'zip' && (
            <com.Banner
              key="zip-banner"
              numResults={zipcodeData.length}
              handleSearchEngine={handleSearchEngine}
            />
          )}
          {resultType === 'state' && (
            <com.Banner
              key="state-banner"
              numResults={stateData.length}
              handleSearchEngine={handleSearchEngine}
            />
          )}
          {resultType === 'distance' && (
            <com.Banner
              key="distance-banner"
              handleSearchEngine={handleSearchEngine}
            />
          )}
        </Grid>
            {/* ZIPCODE SEARCH --> DETAILED QUERY OF CITY ASSOCIATED WITH THE ZIPCODE */}
            {resultType === 'zip' && (
              zipcodeData.map((item) => (
                <Grid item xs={5} key={item.ID} id={item.ID} >
                  <com.ResultCard
                    key={`result-${item.ID}`}
                    zipcodeResult={item}
                  />
                </Grid>
              ))
            )}

            {resultType === 'state' && (
              <Grid item xs={2} sm={8} md={12} xl={12}>
                <com.ZipList key="zip-list" stateResult={stateData} />
              </Grid>
            )}

            {resultType === 'distance' && (
              <Grid item xs={5}>
                <com.DistanceCard
                  key="distance-card"
                  distanceResult={distanceData}
                />
              </Grid>
            )}
          </>
        )}
      </Grid>
    </div>
  </ErrorBoundary>
);
            }
