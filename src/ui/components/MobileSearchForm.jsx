import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTheme, useMediaQuery } from '@mui/material';
import { SearchContext } from '../../SearchContext.js';
import { ErrorBoundary } from 'react-error-boundary';
import { com } from "../../ui";


const MobileSearchForm = ({ handleSearchEngine, isMobileScreen }) => {
  const {
    searchType,
    searchTerm,
    setSearchTerm,
    firstZip,
    setFirstZip,
    secondZip,
    setSecondZip,
    errorMessage,
    isLoading,
    setIsLoading,
    setIsFailedSearch, 
    isFailedSearch
  } = useContext(SearchContext);

  const navigateTo = useNavigate();

  // TO CUSTOMIZE TEXTFIELD FONTSIZE
  const theme = useTheme();
  const isXtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    handleZipInput();
  }, [secondZip]);

  const handleZipInput = () => {
    if (firstZip.length > 0) {
      let zipcodes = `${firstZip}-${secondZip}`;
      setSearchTerm(zipcodes);
    }
  };

  const handleFirstZip = (e) => {
    setFirstZip(e.target.value);
  };

  const handleSecondZip = (e) => {
    setSecondZip(e.target.value);
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setIsFailedSearch(false);

      if (errorMessage) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } else {
        if (searchType === 'zip' || searchType === 'state') {
          if (searchTerm === '') {
            setIsFailedSearch(true);
          }
          setIsLoading(true);
        } else {
          if (firstZip.length !== 5 || secondZip.length !== 5) {
            setIsFailedSearch(true);
            setTimeout(() => {
              setIsFailedSearch(false);
            }, 3000);
            return;
          }
          setIsLoading(true);
        }
      }

      if (searchTerm.trim() !== '') {
        handleSearchEngine();
      }

      setTimeout(() => {
        navigateTo(`/results?query=${searchTerm}`);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      throw error;
    }
  };

  const getFontSize = () => {
    if (isXtraSmallScreen) {
      return '0.5rem';
    }
    if (isSmallScreen) {
      return '0.875rem'; // Equivalent to subtitle2 font size
    }
    if (isMediumScreen) {
      return '1rem'; // Equivalent to subtitle1 font size
    }
    return undefined; // Default font size (let MUI handle it)
  };

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div>
          <h2>Something went wrong:</h2>
          <p>{error.message}</p>
        </div>
      )}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
        {/* DETERMINE SEARCHTYPE -> RESULTTYPE VIA UI BUTTON GROUP*/}
        <div>
          <com.CustomToggleButtonGroup />
        </div>
        <div style={{width: '240px'}}>
        {/* SEARCH FOR CITY DETAILS BY ZIP */}
        {searchType === 'zip' ? (
          <TextField
            value={searchTerm}
            label="Try 10002"
            onChange={(e) => handleInput(e)}
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Arial, sans-serif',
                fontSize: getFontSize(),
                backgroundColor:'white'
              },
            }}
          />
        ) : searchType === 'state' ? (
          <com.DropdownStates handleInput={handleInput} background={'white'}/>
        ) : (
          // DISTANCE BETWEEN ZIPCODES
          <div>
            <TextField
              value={firstZip}
              label="Try From 10002"
              onChange={(e) => handleFirstZip(e)}
              sx={{
                '& .MuiInputBase-input': {
                  fontFamily: 'Arial, sans-serif',
                  fontSize: getFontSize(),
                  backgroundColor:'white'
                },
              }}
            />
            <TextField
              value={secondZip}
              label="To 14437"
              onChange={(e) => handleSecondZip(e)}
              sx={{
                '& .MuiInputBase-input': {
                  fontFamily: 'Arial, sans-serif',
                  fontSize: getFontSize(),
                  backgroundColor:'white'
                },
              }}
            />
          </div>
        )}

        {/* BUTTON FOR SEARCH - FAILED?  */}
        <Button
          variant="contained"
          onClick={handleSearch}
          onKeyDown={handleSearch}
          sx={{
            height: '56px',
            backgroundColor: isFailedSearch ? 'red' : isLoading ? 'green' : undefined,
            '&:hover': {
              backgroundColor: isFailedSearch ? 'red' : isLoading ? 'green' : undefined,
            },
          }}
        >
          {isFailedSearch ? (
            <ErrorOutlineIcon />
          ) : isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <SearchIcon />
          )}
        </Button>
      </div>
      </div>
    </ErrorBoundary>
  );
};

export default MobileSearchForm;
