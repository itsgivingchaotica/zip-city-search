import React, { useState, useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Skeleton from '@mui/material/Skeleton'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MovingIcon from '@mui/icons-material/Moving'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import { SearchContext } from '../../SearchContext.js';

const DistanceCard = ({distanceResult}) => {
      const { isLoading } = useContext(SearchContext);

    const [unit, setUnit] = useState('miles')

    const handleUnitChange = (e) => {
        setUnit(unit === 'miles' ? 'kilometers' : 'miles');
    }

    const flattenObject = (obj) => {
    const flattened = {}

  Object.keys(obj).forEach((key) => {
    const value = obj[key]

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value))
    } else {
      flattened[key] = value
    }
  })

  return flattened
}

const flattenedDistanceResult = flattenObject(distanceResult);

      return (
    <div>
      <Card sx={{ maxWidth: '100%' }}>
        <CardContent sx={{ borderBottom: '2px solid black' }}>
          {isLoading ? (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
              <Skeleton animation="wave" height={60} width="80%" style={{ marginBottom: 6,alignSelf:'center' }} />
              <Skeleton animation="wave" height={60} width="60%" style={{ marginBottom: 10, alignSelf:'center' }} />
            </div>
          ) : (
            <>
              <Typography variant="h4" sx={{ fontFamily: `'Mallanna', sans-serif` }}>
                {flattenedDistanceResult.FromCity}, {flattenedDistanceResult.FromState}
              </Typography>
              <ArrowDownwardIcon />
              <Typography variant="h4" sx={{ fontFamily: `'Mallanna', sans-serif` }}>
                {flattenedDistanceResult.ToCity}, {flattenedDistanceResult.ToState}
              </Typography>
              <FormGroup>
            <FormControlLabel
              control={
                <Switch onChange={handleUnitChange} checked={unit === 'kilometers'} />
              }
              label={unit}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            />
          </FormGroup>
            </>
          )}
        </CardContent>

        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
            <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <div style={{ display: 'flex', textAlign: 'left' }}>
            <div>
              <MovingIcon sx={{ marginRight: '10px' }} />
              </div>
              <div>
              Distance in {unit}: {unit === 'miles' ? flattenedDistanceResult[0] : flattenedDistanceResult[1]}
              </div>
            </div>
          )}
        </CardContent>
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
            <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <div style={{ display: 'flex', textAlign: 'left' }}>
            <div>
              <PlayCircleFilledWhiteIcon sx={{ marginRight: '10px' }} />
              </div>
              <div>
              <Typography>
                Starting at {flattenedDistanceResult.FromLatitude}, {flattenedDistanceResult.FromLongitude} in{' '}
                {flattenedDistanceResult.FromCounty} County
              </Typography>
              </div>
            </div>
          )}
        </CardContent>
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
            <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <div style={{ display: 'flex', textAlign: 'left' }}>
            <div>
              <CheckCircleIcon sx={{ marginRight: '10px' }} />
              </div>
              <div>
              Ending at {flattenedDistanceResult.ToLatitude}, {flattenedDistanceResult.ToLongitude} in{' '}
              {flattenedDistanceResult.ToCounty} County
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default DistanceCard

//    JSON: 
//{
//   "DistanceInMiles": 1835.096876886239,
//   "DistanceInKm": 2953.3078148063778,
//   "FromPointDetails": {
//     "FromLatitude": 30.480652000000,
//     "FromLongitude": -87.194144000000,
//     "FromZipCode": "32504",
//     "FromCity": "PENSACOLA",
//     "FromState": "FL",
//     "FromCounty": "ESCAMBIA",
//     "Distance": "0"
//   },
//   "ToPointDetails": {
//     "ToLatitude": 34.103131000000,
//     "ToLongitude": -118.416253000000,
//     "ToZipCode": "90210",
//     "ToCity": "BEVERLY HILLS",
//     "ToState": "CA",
//     "ToCounty": "LOS ANGELES"
//   }
// }