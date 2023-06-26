import React from 'react'
import Grid from '@mui/material/Grid'
import { ErrorBoundary } from 'react-error-boundary'
import { com } from "../../ui"
import '../../styles/results.css'

export default function Results() {


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
        <div id="root">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 10, md: 15 }} sx={{justifyContent: "center", paddingTop: '10px' }}>
          {/* {contacts.map((contact, index) => ( */}
          {/* <Grid item xs={6} key={index}> */}
          <div style={{transform:'translateY(80%)',display:'flex', marginLeft: '50px', padding: '10px'}}>
          <com.SearchForm />
          </div>
          <Grid item xs={15} sx={{marginTop: '50px', marginBottom: '-100px', maxWidth: '100%'}}>
          <com.Banner/>
          </Grid>
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
            <Grid item xs={5}>
              <com.DistanceCard/>
            </Grid>
          {/* ))} */}
    </Grid>
            
        </div>
        </div>
        </ErrorBoundary>
    )
        
}