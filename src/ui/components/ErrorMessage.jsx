import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { SearchContext } from '../../SearchContext.js';
import { com } from '../../ui'

const ErrorMessage = () => {

   const { isLoading, searchType } = useContext(SearchContext);

  if (isLoading) {
    if (searchType === 'zip'){
      return (<Card variant="outlined" sx={{ height: '100%', marginTop: '40px', maxWidth: '100%'  }}>
      <CardContent sx={{ borderBottom: '2px solid black' }}>
        <Skeleton animation="wave" height={40} width="80%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
        <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
      </CardContent>
    </Card>)
    } else if (searchType === 'distance') {
      return (
    <Card sx={{ marginTop: '40px' }}>
      <CardContent sx={{ borderBottom: '2px solid black' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6, alignSelf: 'center' }} />
          <Skeleton animation="wave" height={60} width="60%" style={{ marginBottom: 10, alignSelf: 'center' }} />
        </div>
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <>
          <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
          <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 6 }} />
        </>
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <>
          <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
          <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
        </>
      </CardContent>

      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <>
          <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{ marginRight: 2 }} />
          <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
        </>
      </CardContent>
    </Card>
  );
    }
    
    }
  
    return (
      <Card variant="outlined" sx={{ display: 'flex', height: '100%',  marginTop: '40px', alignItems: 'center', maxWidth: '100%'}}>
      <CardContent>
        <Typography variant='h2' sx={{ fontFamily: `'Caveat', cursive`, borderBottom: '2px solid black'}}>
          Oops!
        </Typography>
        <Typography variant='h5'>
          Your search returned no results. Please try a new search.
        </Typography>
        </CardContent>
        <CardContent>
        <com.ImageLoader/>
      </CardContent>
      </Card>
    )
}

export default ErrorMessage