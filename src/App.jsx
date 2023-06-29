import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { page, com } from "./ui"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import { SearchContext } from "./SearchContext.js"
//SERVICES: ACCESS THE NETLIFY FUNCTIONS/
import { findCitiesByZipcode, findDistanceBetweenZipcodes, findZipcodesByState } from './services'

function App() {

  const [searchType, setSearchType] = useState('zip')
  const [searchTerm, setSearchTerm] = useState('')
  const [resultType, setResultType] = useState('')
  const [resultTerm, setResultTerm] = useState('')
  const [resultsData, setResultsData] = useState([])
  const [firstZip, setFirstZip] = useState('')
  const [secondZip, setSecondZip] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [toggleChanged, setToggleChanged] = useState(false)
  const [isFailedSearch, setIsFailedSearch] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

// allow to access api endpoint and retrieve data based on the searchType
  const handleSearchEngine = async () => {
    try {
      //IF SEARCHING BY ZIPCODE FOR A CITY
      if (searchType === 'zip') {
        const data = await findCitiesByZipcode('/.netlify/functions/fetch-city',searchTerm);
      //HANDLE RESPONSE ERROR, NO ZIPCODE FOUND
      if (data && data.Error) {
        setErrorMessage(true);
        //ALLOW BUTTON RENDERING TO PRESENT AS FAILED 
        setTimeout(() => {
          setIsFailedSearch(true);
        },2000)
        //THEN RESET TO SEARCH ICON
        setTimeout(() => {
          setIsFailedSearch(false)
        },4000) 
        //IF THE RESPONSE IS VALID
      } else {
        //FUNNEL THE RESPONSE INTO RESULTSDATA SETTER
        setResultsData(data);
        //SET FINAL RESULT TYPE FOR BANNER CONDITION FOR PRESENTING TERM SEARCHED
        setResultType(searchType);
        //SET FINAL RESULT TERM FOR THE SEARCH
        setResultTerm(searchTerm);
        //REMOVE ANY ERROR MESSAGE IF THERE WAS ONE PREVIOUSLY
        setErrorMessage(false); 
      //IF SEARCHING BY STATE FOR LIST OF ZIPCODES 
      }} else if (searchType === 'state') {
        //THIS SECTION HAS PREDETERMINED SEARCH VALUES
        const data = await findZipcodesByState(searchTerm);
        setResultsData(data);
        setResultType(searchType);
        setResultTerm(searchTerm);
        setErrorMessage(false);
      //IF SEARCHING FOR DISTANCE BETWEEN LOCATIONS BY ZIPCODES
      } else if (searchType === 'distance') {
          //CREATE AN LITTLE ARRAY FROM THE TWO ZIPCODES AND REQUEST DATA FROM API
          let zipDistanceSearch = searchTerm.split('-');
          const data = await findDistanceBetweenZipcodes(zipDistanceSearch[0], zipDistanceSearch[1]);
        if (data && data.Error) {
          //HANDLE THE RESPONSE ERROR 
          setErrorMessage(true);
          setTimeout(() => {
            setIsFailedSearch(true);
          },2000)
          setTimeout(() => {
            setIsFailedSearch(false)
          },4000)
        } else {
          //SET RESULTS IF RESPONSE SUCCESSFULLY RECEIVED
          setResultsData(data);
          setResultType(searchType);
          setResultTerm(searchTerm);
          setErrorMessage(false);
          }
      }
    } catch (error) {
      throw error;
    }
};


  return (
    //HANDLE ANY INTERNAL ERRORS
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
              {/* NAVBAR */}
              <div className="navbar">
                <com.Navbar id="navbar"/>
              </div>
              <Routes>
                {/* HOMEPAGE */}
                <Route path="/" element={<page.Home handleSearchEngine={handleSearchEngine}/>} />
                {/* RESULTS PAGE */}
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
