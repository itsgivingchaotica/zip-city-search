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
  console.log("🚀 ~ file: App.jsx:18 ~ App ~ resultsData:", resultsData)
  const [firstZip, setFirstZip] = useState('')
  const [secondZip, setSecondZip] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [toggleChanged, setToggleChanged] = useState(false)
  const [isFailedSearch, setIsFailedSearch] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  //  useEffect(() => {
  //   console.log(resultsData)
  // },[searchTerm])

//   const displayErrorMessage = (message) => {
//   console.log('An error occurred. Displaying error message:', message);

//   return (
//     <div>{message}</div>
//   )
//   // Perform actions to display the error message
//   // For example, show a modal or update the UI with the error message
// };


  const handleSearchEngine = async () => {
  try {
    if (searchType === 'zip') {
      const data = await findCitiesByZipcode(searchTerm);
      if (data && data.Error) {
        setErrorMessage(true);
        setTimeout(() => {
          setIsFailedSearch(true);
        },2000)
        setTimeout(() => {
          setIsFailedSearch(false)
        },4000)
      } else {
        setResultsData(data);
        setResultType(searchType);
        setResultTerm(searchTerm);
        setErrorMessage(false); 
      }
    } else if (searchType === 'state') {
      const data = await findZipcodesByState(searchTerm);
      if (data && data.Error) {
        setErrorMessage(true);
        setTimeout(() => {
          setIsFailedSearch(true);
        },2000)
        setTimeout(() => {
          setIsFailedSearch(false)
        },4000)
      } else {
        setResultsData(data);
        setResultType(searchType);
        setResultTerm(searchTerm);
        setErrorMessage(false);
      }
    } else if (searchType === 'distance') {
      let zipDistanceSearch = searchTerm.split('-');
      const data = await findDistanceBetweenZipcodes(
        zipDistanceSearch[0],
        zipDistanceSearch[1]
      );
      if (data && data.Error) {
        setErrorMessage(true);
        setTimeout(() => {
          setIsFailedSearch(true);
        },2000)
        setTimeout(() => {
          setIsFailedSearch(false)
        },4000)
      } else {
        setResultsData(data);
        setResultType(searchType);
        setResultTerm(searchTerm);
        setErrorMessage(false);
      }
        console.log("🚀 ~ file: App.jsx:72 ~ handleSearchEngine ~ data:", data)
    }
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
    <HelmetProvider>
      <Router>
      <div id="app">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Zip City Search</title>
          <link rel="icon" href="https://img.icons8.com/color-glass/96/city-guide.png" />
          <meta name="description" content="Zip City Search" />
      </Helmet>
      <SearchContext.Provider value={{ searchType, setSearchType, searchTerm, setSearchTerm, resultsData, setResultsData, resultTerm, setResultTerm, resultType, setResultType, firstZip, setFirstZip, secondZip, setSecondZip, errorMessage, setErrorMessage, isLoading, setIsLoading, toggleChanged, setToggleChanged, isFailedSearch, setIsFailedSearch, currentIndex, setCurrentIndex }}>
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
