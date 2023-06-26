import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { page, com } from "./ui"
import {Helmet} from "react-helmet";
import './App.css'

import { SearchContext } from "./SearchContext.js"

function App() {

  const [searchType, setSearchType] = useState('zip')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchEngine = async() => {
    try {
        if (searchType === 'zip'){
        const data = await findCitiesByZipcode(searchTerm);
        console.log(data);
        } else if (searchType === 'state') {
        const data = await findZipcodesByState(searchTerm);
        console.log(data);
        } else {
        let zipDistanceSearch = searchTerm.split('-');
        const data = await findDistanceBetweenZipcodes(zipDistanceSearch[0],zipDistanceSearch[1]);
        console.log(data);
        }
    } catch (error) {
      throw error
    }
  };

  return (
      <Router>
      <div id="app">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Zip City Search</title>
          <link rel="icon" href="https://img.icons8.com/color-glass/96/city-guide.png" />
          <meta name="description" content="Zip City Search" />
      </Helmet>
      <SearchContext.Provider value={{ searchType, setSearchType, searchTerm, setSearchTerm}}>
      <div className="navbar">
        <com.Navbar id="navbar"/>
        </div>
        <Routes>
          <Route path="/" element={<page.Home handleSearchEngine={handleSearchEngine}/>} />
          <Route path="/results" element={<page.Results handleSearchEngine={handleSearchEngine}/>} />
        </Routes>
        </SearchContext.Provider>
      </div>
    </Router>
  )
}

export default App
