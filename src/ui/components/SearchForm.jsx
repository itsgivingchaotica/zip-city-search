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

const SearchForm = ({handleSearchEngine}) => {

    const { searchType, setSearchType, searchTerm, setSearchTerm, resultsData, resultTerm, setResultTerm, resultType, setResultType, firstZip, setFirstZip, secondZip, setSecondZip } = useContext(SearchContext)

    const navigateTo = useNavigate();

    const [isLoading, setIsLoading] = useState(false)
    const [isFailedSearch, setIsFailedSearch] = useState(false)

    useEffect(() => {
    handleZipInput();
  }, [secondZip]);

     const handleZipInput = () => {
      if (firstZip.length > 0){
     let zipcodes = `${firstZip}-${secondZip}`;
     setSearchTerm(zipcodes);
     console.log("🚀 ~ file: SearchForm.jsx:38 ~ handleZipInput ~ zipcodes:", zipcodes)
     }
  }

  const handleFirstZip = (e) => {
    setFirstZip(e.target.value)
  }

  const handleSecondZip = (e) => {
    setSecondZip(e.target.value)
  }

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

 const handleSearch = async () => {
  try {
    if (searchType === 'zip' || searchType === 'state') {
      if (searchTerm === '') {
        setIsFailedSearch(true);
        return;
      }
      setIsLoading(true);
    } else {
      if (firstZip.length !== 5 || secondZip.length !== 5) {
        setIsFailedSearch(true);
        return;
      }
      setIsLoading(true);
    }

    if (searchTerm.trim() !== '') {
      handleSearchEngine();
      navigateTo(`/results?query=${searchTerm}`);
    }

    setIsLoading(false);
  } catch (error) {
    // Handle the error appropriately (e.g., show an error message)
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
        )}>
        <com.CustomToggleButtonGroup/>
    {/* <ToggleButtonGroup
      color="primary"
      value={searchType}
      exclusive
      onChange={handleChangeCategory}
      aria-label="Platform" 
      sx={{backgroundColor:"white"}}
    >
      <ToggleButton value="zip">Zip</ToggleButton>
      <ToggleButton value="state">State</ToggleButton>
      <ToggleButton value="zipsDistance">Distance</ToggleButton>
    </ToggleButtonGroup> */}

    {/* SEARCH FOR CITY DETAILS BY ZIP */}
    {searchType === 'zip' ? (

      <TextField 
        value={searchTerm} 
        label="Try 10002"
        onChange={(e) => handleInput(e)}
        sx={{
    '& .MuiInputBase-input': {
      fontFamily: 'Arial, sans-serif', 
      color: 'white' },
    }}
        >
    </TextField>
) : searchType==='state' ? (
  <com.DropdownStates handleInput={handleInput}/>
  //HANDLE STATE SEARCH FOR ZIPCODES

) : //DISTANCE BETWEEN ZIPCODES 
  ( <><TextField 
        value={firstZip} 
        label="Try From 10002"
        onChange={(e) => handleFirstZip(e)}
        sx={{
    '& .MuiInputBase-input': {
      fontFamily: 'Arial, sans-serif', 
      color: 'white', },
    }}
        >
    </TextField>
    <TextField 
        value={secondZip} 
        label="To 14437"
        onChange={(e) => handleSecondZip(e)}
        sx={{
    '& .MuiInputBase-input': {
      fontFamily: 'Arial, sans-serif', 
      color: 'white', },
    }}
        >
    </TextField>
    </>
)}
    {/* BUTTON FOR SEARCH - FAILED?  */}
    {isFailedSearch ? (<Button
      variant="contained"
      sx={{
    ':focus': {
      backgroundColor: 'red',
    },
  }}>
    <ErrorOutlineIcon/>
    </Button>
  ) : 
    //SEARCH NOT FAILED YET
    (<Button onClick={handleSearch}
      variant="contained" 
      sx={{
    ':focus': {
      backgroundColor: 'green',
    },
  }}>
        {/* LOADING OR NEUTRAL ICON */}
        {isLoading ? <CircularProgress color="inherit" /> : <SearchIcon />}
    </Button>)}
    </ErrorBoundary>
  );
    
}

export default SearchForm