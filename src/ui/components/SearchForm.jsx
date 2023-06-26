import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { SearchContext } from '../../SearchContext.js'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import states from '../../helpers/states.js'

const SearchForm = ({handleSearchEngine}) => {

    const { searchType, setSearchType, searchTerm, setSearchTerm } = useContext(SearchContext)

    const navigateTo = useNavigate();

    const [isLoading, setIsLoading] = useState(false)
    const [isFailedSearch, setIsFailedSearch] = useState(false)
    const [firstZip, setFirstZip] = useState('')
    const [secondZip, setSecondZip] = useState('')

  const handleFirstZip = (e) => {
    setFirstZip(e.target.value)
  }

  const handleSecondZip = (e) => {
    setSecondZip(e.target.value)
  }

  const handleChangeCategory = (e) => {
    setSearchType(e.target.value)
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

 const handleSearch = () => {
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
      let zipcodes = `${firstZip}-${secondZip}`;
      setSearchTerm(zipcodes);
      setIsLoading(true);
    }

    if (searchTerm.trim() !== '') {
      handleSearchEngine();
      navigateTo(`/results?query=${searchTerm}`);
    }

    setIsLoading(false);
  } catch (error) {
    // Handle the error appropriately (e.g., show an error message)
    throw new Error(error.message);
  }
};

console.log(searchTerm);

  return (
    <>
    <ToggleButtonGroup
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
    </ToggleButtonGroup>

    {/* SEARCH FOR CITY DETAILS BY ZIP */}
    {searchType === 'zip' ? (

      <TextField 
        value={searchTerm} 
        label="Try 10002"
        onChange={(e) => handleInput(e)}
        sx={{
    '& .MuiInputBase-input': {
      fontFamily: 'Arial, sans-serif', 
      color: 'white', },
    }}
        >
    </TextField>
) : searchType==='state' ? (
  //HANDLE STATE SEARCH FOR ZIPCODES
  <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label" sx={{color: 'white'}}>State</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={searchTerm}
          label="Select"
          onChange={(e) => handleInput(e)}
        >
        {states.map((state) => (
    <MenuItem key={state.abbreviation} value={state.abbreviation}>
      {state.name}
    </MenuItem>
  ))}
        </Select>
  </FormControl>

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
    </>
  );
    
}

export default SearchForm