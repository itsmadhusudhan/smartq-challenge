import React from 'react';

const Navbar=()=>{
  return(
    <nav className="navbar">
      <a href="/" className="navbar__item"><h1>SmartQ</h1></a>
      <a href="/" className="navbar__item">Home</a>
      <div className="navbar__end">
      <a href="/" className="navbar__item">madhu@thesmartq.com</a>        
      </div>
    </nav>
  )
}

export default Navbar;