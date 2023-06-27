import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

const ZipList = ({stateResult}) => {
    
    return (
        <Card variant="outlined" sx={{ height: '100%', maxWidth: '100%' }}>

        {/* {searchType === 'state' && (
            stateData.map((item) => (
              <Grid item xs={5} key={id}>
                <com.ZipList stateResult={item}/> 
              </Grid>
            )))} */}
            <Grid container rowSpacing = {1} columnSpacing={{ xs: 1}} sx={{maxWidth: '100%'}}>
            {/* map card content */}
            {stateResult.map((zip) => (
                <Grid item xs={2}>
                <CardContent >
                    {zip}
                </CardContent>
                </Grid>
            ))}
            </Grid>
        </Card>
    )
}

export default ZipList