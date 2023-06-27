import React, { useContext } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

import { SearchContext } from "../../SearchContext.js"

const CustomToggleButtonGroup = () => {

    const { searchType, setSearchType, searchTerm, setSearchTerm } = useContext(SearchContext)


    const handleChangeCategory = (e) => {
    setSearchType(e.target.value)
  };

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
      <ToggleButton value="distance">Distance</ToggleButton>
    </ToggleButtonGroup>
    </>
    )
}

export default CustomToggleButtonGroup