import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { SearchContext } from '../../SearchContext.js'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { ErrorBoundary } from 'react-error-boundary'
import { com } from "../../ui"

const SearchForm = ({ handleSearchEngine }) => {
  const {
    searchType,
    setSearchType,
    searchTerm,
    setSearchTerm,
    resultsData,
    resultTerm,
    setResultTerm,
    resultType,
    setResultType,
    firstZip,
    setFirstZip,
    secondZip,
    setSecondZip,
    setErrorMessage,
    errorMessage,
    isLoading,
    setIsLoading,
    setIsFailedSearch, 
    isFailedSearch
  } = useContext(SearchContext);

  const navigateTo = useNavigate();

  useEffect(() => {
    handleZipInput();
  }, [secondZip]);

  const handleZipInput = () => {
    if (firstZip.length > 0) {
      let zipcodes = `${firstZip}-${secondZip}`;
      setSearchTerm(zipcodes);
      console.log("🚀 ~ file: SearchForm.jsx:38 ~ handleZipInput ~ zipcodes:", zipcodes);
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
        // navigateTo(`/results?query=${searchTerm}`);
      }

      setTimeout(() => {
        navigateTo(`/results?query=${searchTerm}`);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      throw error;
    }
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
