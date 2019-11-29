import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = {
  "width": "25vw",
  "margin": "0 20px",
  "textAlign": "left"
}

export default function Sidebars({ userInfo, setServerStatus }) {
  
  return (
    <div className="Sidebar" style={sidebarStyle}>
      <h3 style={{"marginBottom": "20px", "textAlign": "center", "color": "black"}}><Link to="./">r/space</Link></h3>
      <p>Share & discuss informative content on: * Astrophysics * Cosmology * Space Exploration * Planetary Science * Astrobiology</p>
      <button >
        {
          userInfo.username === ""  
          ? <Link to={"/login"}>SUBMIT A NEW POST</Link>
          : <Link to={{
            pathname: "/newPost",
            aboutProps: {
              setServerStatus: setServerStatus
            }}}>
              SUBMIT A NEW POST
          </Link>
        }
      </button>
    </div>
  )
}