import React, { useContext } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

import { SearchContext } from "../../SearchContext.js"

const CustomToggleButtonGroup = () => {

    const { searchType, setSearchType, setSearchTerm, setResultTerm, setFirstZip, setSecondZip } = useContext(SearchContext)


    const handleChangeCategory = (e) => {
    setSearchType(e.target.value);
    setSearchTerm('');
    setFirstZip('');
    setSecondZip('');
  };

    return (
        <div>
        <ToggleButtonGroup
      color="primary"
      value={searchType}
      exclusive
      onChange={handleChangeCategory}
      aria-label="Platform" 
      sx={{backgroundColor:"white", height: '56px'}}
    >
      <ToggleButton value="zip">Zip</ToggleButton>
      <ToggleButton value="state">State</ToggleButton>
      <ToggleButton value="distance">Distance</ToggleButton>
    </ToggleButtonGroup>
    </div>
    )
}

export default CustomToggleButtonGroup