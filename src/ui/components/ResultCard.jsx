import React, { useContext, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import Groups2Icon from '@mui/icons-material/Groups2'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import HomeIcon from '@mui/icons-material/Home'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'

import { SearchContext } from "../../SearchContext.js"

const ResultCard = ({zipcodeResult}) => {

    const { searchType, resultsData } = useContext(SearchContext);
    
    return (
        <div >
        {/* CITY INFORMATION VIA ZIPCODE SEARCH*/}
          <Card variant="outlined" sx={{ height: '100%', textAlign:'left'}} >
            {/* CITY, STATE HEADER */}
            <CardContent sx={{ borderBottom: '2px solid black'}}>
            <Typography variant='h4' sx={{fontFamily: `'Mallanna', sans-serif`}}>
            {zipcodeResult.City}, {zipcodeResult.State}
            </Typography>
            </CardContent>
            
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            State: {zipcodeResult.StateFullName}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            Zipcode: {zipcodeResult.ZipCode}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            County: {zipcodeResult.CountyName}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <CallIcon sx={{marginRight:'10px'}}/>
            Area Codes: {zipcodeResult.AreaCode}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{marginRight:"10px"}}/>
                Location: {zipcodeResult.Latitude}, {zipcodeResult.Longitude}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Groups2Icon sx={{marginRight:'10px'}}/>
                Population: {zipcodeResult.PopulationEstimate}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <AttachMoneyIcon sx={{marginRight:'10px'}}/>
                Income per Household: {zipcodeResult.IncomePerHousehold}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{marginRight:'10px'}}/>
                Housholds Per Zipcode: {zipcodeResult.HouseholdsPerZipcode}
            </CardContent>

            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <FamilyRestroomIcon sx={{marginRight: '10px'}}/>
                Average Family Size: {zipcodeResult.AverageFamilySize}
            </CardContent>

          </Card>
        </div>)
        
}

export default ResultCard