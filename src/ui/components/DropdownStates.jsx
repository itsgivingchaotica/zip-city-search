import React, { useContext } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import states from '../../helpers/states.js'

import { SearchContext } from "../../SearchContext.js"

const DropdownStates = ({handleInput, background}) => {

    const { searchTerm } = useContext(SearchContext)

    return (
        background ? (<>
      <FormControl sx={{ minWidth: 120, backgroundColor:'white'}}>
        <InputLabel id="demo-simple-select-helper-label" >State</InputLabel>
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
    </>) : (<>
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
    </>)

    )
}

export default DropdownStates