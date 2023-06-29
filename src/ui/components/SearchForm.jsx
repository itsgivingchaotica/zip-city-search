import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTheme, useMediaQuery } from '@mui/material';
import { SearchContext } from '../../SearchContext.js'
import { ErrorBoundary } from 'react-error-boundary'
import { com } from "../../ui"

const SearchForm = ({ handleSearchEngine, isMobileScreen }) => {

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

  //TO CUSTOMIZE TEXTFIELD FONTSIZE
  const theme = useTheme();
  const isXtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  //UPDATE THE SEARCH TERM AS SOON AS THE 
  //SECOND ZIP TEXTFIELD STARTS HANDLING INPUT
  useEffect(() => {
    handleZipInput();
  }, [secondZip]);

  //SET SEARCH TERM TO `10002-14437` FORMAT
  const handleZipInput = () => {
    if (firstZip.length > 0) {
      let zipcodes = `${firstZip}-${secondZip}`;
      setSearchTerm(zipcodes);
    }
  };

  //HANLE INPUT OF FIRST ZIPCODE
  const handleFirstZip = (e) => {
    setFirstZip(e.target.value);
  };

  //HANLE INPUT OF SECOND ZIPCODE
  const handleSecondZip = (e) => {
    setSecondZip(e.target.value);
  };

  //UPDATE THE SEARCH TERM FOR SENDING REQUEST TO API
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  //HANDLER THAT UPDATES STATE OF THE APP BASED ON SEARCH BUTTON
  const handleSearch = async () => {
    try {
      //CLEAR ANY FAILURE FROM PREVIOUS SEARCH
      setIsFailedSearch(false);
      //IF THE RESPONSE CAME BACK AS ERROR
      if (errorMessage) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        //SET SEARCH AS FAILED IF NOTHING WAS INPUT
      } else {
        if (searchType === 'zip' || searchType === 'state') {
          if (searchTerm === '') {
            setIsFailedSearch(true);
          }
          //STILL ALLOW LOADING
          setIsLoading(true);
        } else {
          //IF ZIPS ARE NOT 5 DIGITS LONG
          if (firstZip.length !== 5 || secondZip.length !== 5) {
            setIsFailedSearch(true);
            setTimeout(() => {
              setIsFailedSearch(false);
            }, 3000);
            return;
          }
          //ALLOW BUTTON TO GIVE LOADING FEEDBACK 
          setIsLoading(true);
        }
      }
      //IF ZIPCODES CONCATENATED ARE NOT EMPTY FOR DISTANCE SEARCH
      if (searchTerm.trim() !== '') {
        handleSearchEngine();
      }

      //NAVIGATE TO THE RESULTS PAGE BASED ON SEARCH TERM
      setTimeout(() => {
        navigateTo(`/results?query=${searchTerm}`);
        //RESET LOADING STATE
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      throw error;
    }
  };

  //CHANGE FONT SIZE BASE ON SCREEN SIZE
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
      {/* DETERMINE SEARCHTYPE -> RESULTTYPE VIA UI BUTTON GROUP*/}
      <com.CustomToggleButtonGroup />

      {/* SEARCH FOR CITY DETAILS BY ZIP */}
      {searchType === 'zip' ? (
        <TextField
          value={searchTerm}
          label="Try 10002"
          onChange={(e) => handleInput(e)}
          sx={{
            '& .MuiInputBase-input': {
              fontFamily: 'Arial, sans-serif',
              color: 'white',
              fontSize: getFontSize()
            },
          }}
        />
      ) : searchType === 'state' ? (
        <com.DropdownStates handleInput={handleInput} />
      ) : (
        //DISTANCE BETWEEN ZIPCODES
        <>
          <TextField
            value={firstZip}
            label="Try From 10002"
            onChange={(e) => handleFirstZip(e)}
            sx={{
              '& .MuiInputBase-input': {
                fontFamily: 'Arial, sans-serif',
                color: 'white',
                fontSize: getFontSize()
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
                color: 'white',
                fontSize: getFontSize()
              },
            }}
          />
        </>
      )}

      {/* BUTTON FOR SEARCH - FAILED?  */}
      {isFailedSearch ? (
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: 'red'
          }}
        >
          <ErrorOutlineIcon />
        </Button>
      ) : isLoading ? (
        // LOADING ICON
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'green',
            color: 'white',
            ':hover': { color: 'white', backgroundColor: 'green' },
          }}
        >
          <CircularProgress color="inherit" />
        </Button>
      ) : (
        // SEARCH ICON
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            ':focus': { color: 'white', backgroundColor: 'green' },
            ':hover': { color: 'white', backgroundColor: 'green' },
          }}
        >
          <SearchIcon />
        </Button>
      )}
    </ErrorBoundary>
  );
};

export default SearchForm;
