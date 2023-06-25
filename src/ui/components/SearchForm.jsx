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

const SearchForm = ({handleSearchEngine}) => {

    const { searchType, setSearchType, searchTerm, setSearchTerm } = useContext(SearchContext)

    const navigateTo = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    const [isFailedSearch, setIsFailedSearch] = useState(false)

  const handleChangeCategory = (e, newSearchType) => {
    setSearchType(newSearchType)
  };

  const handleInput = (e, newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  const handleSearch = (e) => {
    if (searchTerm == ''){
        setIsFailedSearch(true);
        return;
    }
    setIsLoading(true)
    if (searchTerm.trim() != ''){
        handleSearchEngine();
        navigateTo(`/results?query=${searchTerm}`);
    }
    setIsLoading(false)
  }

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
      <ToggleButton value="city">City</ToggleButton>
      <ToggleButton value="state">State</ToggleButton>
    </ToggleButtonGroup>
    <TextField 
        value={searchTerm} 
        label={searchType==='zip' ? "Try 10002" : searchType==='city' ? "Try Denver" : "Try Maryland"}
        onChange={(e) => handleInput(e)}
        sx={{
    '& .MuiInputBase-input': {
      fontFamily: 'Arial, sans-serif', 
      color: 'white', },
    }}
        >
    </TextField>
    {isFailedSearch ? (<Button
      variant="contained"
      sx={{
    ':focus': {
      backgroundColor: 'red',
    },
  }}>
    <ErrorOutlineIcon/>
    </Button>) : (<Button onClick={handleSearch}
      variant="contained" 
      sx={{
    ':focus': {
      backgroundColor: 'green',
    },
  }}>
        {isLoading ? <CircularProgress color="inherit" /> : <SearchIcon />}
    </Button>)}
    </>
  );
    
}

export default SearchForm