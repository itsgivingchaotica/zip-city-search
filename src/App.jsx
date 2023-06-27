import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { page, com } from "./ui"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'

import { SearchContext } from "./SearchContext.js"
import { findCitiesByZipcode, findDistanceBetweenZipcodes, findZipcodesByState } from './services'

function App() {

  const [searchType, setSearchType] = useState('zip')
  const [searchTerm, setSearchTerm] = useState('')
  const [resultType, setResultType] = useState('')
  const [resultTerm, setResultTerm] = useState('')
  const [resultsData, setResultsData] = useState([])

  //  useEffect(() => {
  //   console.log(resultsData)
  // },[searchTerm])


  const handleSearchEngine = async() => {
    try {
        if (searchType === 'zip'){
          const data = await findCitiesByZipcode(searchTerm);
          setResultsData(data);
        } else if (searchType === 'state') {
          const data = await findZipcodesByState(searchTerm);
          setResultsData(data);
        } else {
          let zipDistanceSearch = searchTerm.split('-');
          const data = await findDistanceBetweenZipcodes(zipDistanceSearch[0],zipDistanceSearch[1]);
          setResultsData(data);
        }
    } catch (error) {
      throw error
    }
  };

  //
  // const handleSearchEngine = async() => {
  //   try {
  //       if (searchType === 'zip'){
  //         const data = await findCitiesByZipcode(searchTerm);
  //         console.log(data);
  //         setResultsData(...resultsData, data.item);
  //       } else if (searchType === 'state') {
  //         const data = await findZipcodesByState(searchTerm);
  //         console.log(data);
  //         setResultsData(Array.from(data));
  //       } else {
  //         let zipDistanceSearch = searchTerm.split('-');
  //         const data = await findDistanceBetweenZipcodes(zipDistanceSearch[0],zipDistanceSearch[1]);
  //         console.log(data);
  //         setResultsData();
  //       }
  //   } catch (error) {
  //     throw error
  //   }
  // };


  return (
      <ErrorBoundary
      fallbackRender={({ error }) => (
            <div>
            <h2>Something went wrong:</h2>
            <p>{error.message}</p>
            </div>
        )}
    >
    <HelmetProvider>
      <Router>
      <div id="app">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Zip City Search</title>
          <link rel="icon" href="https://img.icons8.com/color-glass/96/city-guide.png" />
          <meta name="description" content="Zip City Search" />
      </Helmet>
      <SearchContext.Provider value={{ searchType, setSearchType, searchTerm, setSearchTerm, resultsData, setResultsData, resultTerm, setResultTerm, resultType, setResultType }}>
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
    </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
