import React, { useEffect, useRef, useContext } from 'react'
import { SearchContext } from '../../SearchContext.js'
import { com } from "../../ui"
import '../../styles/logo.css'

export default function Home() {

    const { searchType, setSearchType, searchTerm, setSearchTerm } = useContext(SearchContext)

    const handleSearchEngine = () => {

    }

    return (
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
    )
        
}