import React, { useEffect, useRef, useContext } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { SearchContext } from '../../SearchContext.js'
import { com } from "../../ui"
import { findCitiesByZipcode, findDistanceBetweenZipcodes, findZipcodesByState } from '../../services'
import '../../styles/logo.css'

export default function Home() {

    const { searchType, setSearchType, searchTerm, setSearchTerm, set } = useContext(SearchContext)

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
        <ErrorBoundary
      fallbackRender={({ error }) => (
            <div>
            <h2>Something went wrong:</h2>
            <p>{error.message}</p>
            </div>
        )}
    >
            <div className="homepage">
            <div id="logo-animate">
                <div className="animation">
                <com.AnimatedHeader text="Find exactly where you're looking for!"/>
                </div>
            </div>
            <div style={{transform:'translateY(280%)',display:'flex', marginLeft: '50px'}}>
                <com.SearchForm handleSearchEngine={handleSearchEngine}/>
            </div>
            </div>
        </ErrorBoundary>
    )
        
}