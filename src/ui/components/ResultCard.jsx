import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import Groups2Icon from '@mui/icons-material/Groups2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { SearchContext } from '../../SearchContext.js';

const ResultCard = ({ zipcodeResult }) => {

  const { isLoading } = useContext(SearchContext);

  return (
    <div>
      {/* CITY INFORMATION VIA ZIPCODE SEARCH*/}
      <Card variant="outlined" sx={{ height: '100%' }}>
        {/* CITY, STATE HEADER */}
        <CardContent sx={{ borderBottom: '2px solid black' }}>
          {isLoading ? (
            <Skeleton animation="wave" height={40} width="80%" style={{ marginBottom: 6 }} />
          ) : (
            <Typography variant="h4" sx={{ fontFamily: `'Mallanna', sans-serif` }}>
              {zipcodeResult.City}, {zipcodeResult.State}
            </Typography>
          )}
        </CardContent>
        {/* STATE FULL NAME */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
          ) : (
            <Typography>State: {zipcodeResult.StateFullName}</Typography>
          )}
        </CardContent>
        {/* ZIPCODE  */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
          ) : (
            <Typography>Zipcode: {zipcodeResult.ZipCode}</Typography>
          )}
        </CardContent>
        {/* AREA CODES ASSOCIATED */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
             <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <>
              <CallIcon sx={{ marginRight: '10px' }} />
              <Typography>Area Codes: {zipcodeResult.AreaCode}</Typography>
            </>
          )}
        </CardContent>
        {/* LOCATION AS LATITUDE AND LONGITUDE  */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
             <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <>
              <LocationOnIcon sx={{ marginRight: '10px' }} />
              <Typography >
                Location: {zipcodeResult.Latitude}, {zipcodeResult.Longitude}
              </Typography>
            </>
          )}
        </CardContent>
        {/* POPULATION ESTIMATE OF LOCATION */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
             <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <>
              <Groups2Icon sx={{ marginRight: '10px' }} />
              <Typography>Population: {zipcodeResult.PopulationEstimate}</Typography>
            </>
          )}
        </CardContent>
        {/* INCOME PER HOUSEHOLD  */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
             <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <>
              <AttachMoneyIcon sx={{ marginRight: '10px' }} />
              <Typography>Income per Household: {zipcodeResult.IncomePerHousehold}</Typography>
            </>
          )}
        </CardContent>
        {/* NUMBER HOUSEHOLDS FOR THE ZIPCODE */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
             <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <>
              <HomeIcon sx={{ marginRight: '10px' }} />
              <Typography>Housholds Per Zipcode: {zipcodeResult.HouseholdsPerZipcode}</Typography>
            </>
          )}
        </CardContent>
        {/* AVERAGE FAMILY SIZE */}
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading ? (
            <>
             <Skeleton animation="wave" variant="circular" width={20} height={20} sx={{marginRight: 2}}/>
            <Skeleton animation="wave" height={20} width="50%" style={{ marginBottom: 6 }} />
            </>
          ) : (
            <>
              <FamilyRestroomIcon sx={{ marginRight: '10px' }} />
              <Typography>Average Family Size: {zipcodeResult.AverageFamilySize}</Typography>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;