import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'

const SearchForm = ({handleSearchEngine}) => {

    const navigateTo = useNavigate();

    const [alignment, setAlignment] = useState('zip')
    const [searchTerm, setSearchTerm] = useState('')

  const handleChangeCategory = (event, newAlignment) => {
    setAlignment(newAlignment)
  };

  const handleInput = (e, newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() != ''){
        handleSearchEngine();
        navigateTo(`/results?query=${searchTerm}`);
    }
  }

  return (
    <>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
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
        label={alignment==='zip' ? "Try 10002" : alignment==='city' ? "Try Denver" : "Try Maryland"}
        onChange={(e) => handleInput(e)}
        sx={{
    '& .MuiInputBase-input': {
      fontFamily: 'Arial, sans-serif', 
      color: 'white', },
    }}
        >
    </TextField>
    <Button onClick={handleSearch}
      variant="contained" 
      sx={{backgroundColor: 'green'}}>
        {isLoading ? <CircularProgress color="inherit" /> : <SearchIcon />}
    </Button>
    </>
  );
    
}

export default SearchForm