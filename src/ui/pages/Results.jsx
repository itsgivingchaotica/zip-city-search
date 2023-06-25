import React from 'react'
import Grid from '@mui/material/Grid'
import { com } from "../../ui"
import '../../styles/results.css'

export default function Results() {
    return (
        <div className="results">
        <div id="root">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 10, md: 15 }} sx={{justifyContent: "center", paddingTop: '10px' }}>
          {/* {contacts.map((contact, index) => ( */}
          {/* <Grid item xs={6} key={index}> */}
          <Grid item xs={15} sx={{marginTop: '100px', marginBottom: '-100px', width: '100%'}}>
          <com.Banner/>
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
            </Grid>
            <Grid item xs={5}>
              <com.ResultCard/> 
            </Grid>
          {/* ))} */}
    </Grid>
            
        </div>
        </div>
    )
        
}