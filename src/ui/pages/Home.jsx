import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { SearchContext } from '../../SearchContext.js'
import { useMediaQuery } from '@mui/material'
import { com } from "../../ui"
import '../../styles/logo.css'

export default function Home({handleSearchEngine}) {

  const isMobileScreen = useMediaQuery("(max-width: 414px)")
  const homeNavigate = useNavigate();

  useEffect(() => {
    const lastVisitedPage = localStorage.getItem('lastVisitedPage');
    if (lastVisitedPage) {
      homeNavigate(lastVisitedPage);
    }
  }, [homeNavigate]);

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <div>
          <h2>Something went wrong:</h2>
          <p>{error.message}</p>
        </div>
      )}
    > 
    {isMobileScreen ? (<div className="margincolor" style={{marginTop:'100px'}}>
        <div className="homepage-mobile">
          <div>
            <div className="animation-mobile">
              <com.AnimatedHeader text="Find exactly where you're looking for!"/>
            </div>
          </div>
          <div style={{transform:'translateY(100%)',display:'flex', justifyContent: 'center'}}>
            <com.MobileSearchForm handleSearchEngine={handleSearchEngine} isMobileScreen={isMobileScreen}/>
          </div>
        </div>
      </div>) : (<div className="margincolor">
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
      </div>)}
      
    </ErrorBoundary>
)
  
}