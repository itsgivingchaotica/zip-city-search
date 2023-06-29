import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import '../../styles/navbar.css'
import logo from '../../logo2.mp4'

const Navbar = () => {

  //ICON JUMPS EACH RENDER
  const video = useRef(null);

  //PLAY THE ICON MP4 ON RENDER
  useEffect(() => {
    video.current.play();
  }, []);

  return (
    <div id="navbar">
      <div className="logo">
      {/* LOGO ICON  */}
        <video width="100" height="100" ref={video} autoPlay muted>
            <source src={logo} type='video/mp4'/>
        </video>
      </div>
        <NavLink to="/">
          <div style={{
            display: 'flex', 
            alignItems: 'center', 
            transform: 'translateX(-13%)', 
            textShadow: '1px 1px 2px black'}}
          >
            <Typography sx={{
              transform: 'translateY(-10%)', 
              fontFamily: `'Caveat', cursive;`, 
              fontSize: '2.3rem', 
              marginRight: '10px'}}
            >
            Zip City
            </Typography>
            <Typography sx={{
              fontFamily: `'Mallanna', sans-serif`, 
              fontSize: '1.7rem', 
              marginRight:'20px', 
              marginTop:"5px", 
              transform: 'translateX(-5%)',  
                '&:hover': { color: 'var(--dark-orange-web)'},}}>
              SEARCH
            </Typography>
          </div>
        </NavLink>
    </div>
  )
}

export default Navbar