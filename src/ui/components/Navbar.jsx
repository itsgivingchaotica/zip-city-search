import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import '../../styles/navbar.css'
import logo from '../../logo2.mp4'

const Navbar = () => {

    const video = useRef(null);

    useEffect(() => {
        video.current.play();
    }, []);

    return (
      <div id="navbar">
        <div className="logo">
            <video width="100" height="100" ref={video} autoPlay muted>
                <source src={logo} type='video/mp4'/>
            </video>
        </div>
          <NavLink to="/">
          <div style={{display: 'flex', alignItems: 'center'}}>
          <Typography sx={{transform: 'translateY(-10%)', fontFamily: `'Caveat', cursive;`, fontSize: '2.3rem', marginRight: '10px'}}>Zip City</Typography><Typography sx={{fontFamily: `'Mallanna', sans-serif`, fontSize: '1.5rem'}}>Search</Typography>
          </div>
          </NavLink>
      </div>
    )
        
}

export default Navbar