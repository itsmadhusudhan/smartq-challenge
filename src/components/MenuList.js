import React from 'react';

const MenuList=(props)=>{
  return(
    <nav className="navbar navbar__side">
      <a href="#all" className="navbar__item active" onClick={props.setActiveMenu}>All</a>
      <a href="#Chinese Combos" className="navbar__item" onClick={props.setActiveMenu}>Chinese Combos</a>        
      <a href="#Chinese Starter" className="navbar__item" onClick={props.setActiveMenu}>Chinese Starter</a>        
      <a href="#Salads" className="navbar__item" onClick={props.setActiveMenu}>Salads</a>        
      <a href="#Oriental" className="navbar__item" onClick={props.setActiveMenu}>Oriental</a>        
      
    </nav>
  )
}

export default MenuList;