import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import Groups2Icon from '@mui/icons-material/Groups2'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import HomeIcon from '@mui/icons-material/Home'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'

const ResultCard = () => {
    return (
        <div style={{marginTop: '100px'}}>
        {/* BY ZIP */}
          <Card variant="outlined" sx={{ height: '100%'}}>
            {/* <Stack spacing={2}> */}


            {/* EMAIL: REQUIRED */}
            <CardContent sx={{ borderBottom: '2px solid black'}}>
            <Typography variant='h4' sx={{fontFamily: `'Mallanna', sans-serif`}}>
            Dansville, NY
            </Typography>
            </CardContent>

            {/* MOBILE PHONE: REQUIRED */}
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            State: 
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            Zipcode: 
            </CardContent>

            {/* MOBILE PHONE: REQUIRED */}
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            County: 
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <CallIcon sx={{marginRight:'10px'}}/>
            Area Codes: 
            </CardContent>

            {/* WORK PHONE: OPTIONAL */}
            {/* {work && (  */}
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{marginRight:"10px"}}/>
                    Location: 
                </CardContent>
                {/* )
            } */}

             {/* WORK PHONE: OPTIONAL */}
            {/* {work && (  */}
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Groups2Icon sx={{marginRight:'10px'}}/>
                    Population: 
                </CardContent>
                {/* )
            } */}

             {/* WORK PHONE: OPTIONAL */}
            {/* {work && (  */}
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <AttachMoneyIcon sx={{marginRight:'10px'}}/>
                    Income per Household: 
                </CardContent>
                {/* )
            } */}

            {/* WORK PHONE: OPTIONAL */}
            {/* {work && (  */}
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{marginRight:'10px'}}/>
                   Housholds Per Zipcode: 
                </CardContent>
                {/* )
            } */}


             {/* WORK PHONE: OPTIONAL */}
            {/* {work && (  */}
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <FamilyRestroomIcon sx={{marginRight: '10px'}}/>
                    Average Family Size: 
                </CardContent>
                {/* )
            } */}


            {/* </Stack> */}
          </Card>
        </div>)
        
}

export default ResultCard