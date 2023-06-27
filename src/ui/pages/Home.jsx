import React, { useEffect, useRef, useContext } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { SearchContext } from '../../SearchContext.js'
import { com } from "../../ui"
import '../../styles/logo.css'

export default function Home({handleSearchEngine}) {

    const { searchType, setSearchType, searchTerm, setSearchTerm } = useContext(SearchContext)

    return (
        <ErrorBoundary
      fallbackRender={({ error }) => (
            <div>
            <h2>Something went wrong:</h2>
            <p>{error.message}</p>
            </div>
        )}
    > 
    <div className="margincolor">
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
            </div>
        </ErrorBoundary>
    )
        
}