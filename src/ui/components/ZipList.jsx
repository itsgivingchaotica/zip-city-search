import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import { SearchContext } from '../../SearchContext.js'

const ZipList = ({ stateResult }) => {
    
  const { isLoading } = useContext(SearchContext);

  return (
    <Card variant="outlined" sx={{ height: '100%', maxWidth: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} sx={{ maxWidth: '100%' }}>
        {/* map card content state->all zips */}
        {stateResult.map((zip) => (
          <Grid item xs={2}>
            <CardContent>
              {isLoading ? (
                <Skeleton animation="wave" height={20} width="100%" style={{ marginBottom: 6 }} />
              ) : (
                zip
              )}
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default ZipList