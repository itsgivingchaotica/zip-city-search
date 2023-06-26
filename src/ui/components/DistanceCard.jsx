import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import MovingIcon from '@mui/icons-material/Moving'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'

const DistanceCard = () => {

    const [unit, setUnit] = useState('miles')

    const handleUnitChange = (e) => {
        setUnit(unit === 'miles' ? 'kilometers' : 'miles');
    }

    return (
        <div>
          <Card sx={{transform: 'translateY(100px)', maxWidth: '100%'}}>
            <CardContent sx={{ borderBottom: '2px solid black'}}>
               <Typography variant='h4' sx={{fontFamily: `'Mallanna', sans-serif`}}>
                New York, NY  
                </Typography>
                <ArrowDownwardIcon />
                <Typography variant='h4' sx={{fontFamily: `'Mallanna', sans-serif`}}>
                Dansville, NY 
                </Typography>
                <FormGroup>
            <FormControlLabel 
              control={
                <Switch
                  onChange={handleUnitChange}
                  checked={unit === 'kilometers'}
                />
              }
              label={unit}
              sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            />
          </FormGroup>
            </CardContent>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <MovingIcon sx={{marginRight: '10px'}}/>
                Distance in {unit}:
            </CardContent>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <PlayCircleFilledWhiteIcon sx={{marginRight: '10px'}}/>
                Starting at (lat,long) in (county) County 
            </CardContent>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{marginRight: '10px'}}/>
                Ending at (lat,long) in (county) County
            </CardContent>
          </Card>
        </div>
    )
}

export default DistanceCard
// {
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