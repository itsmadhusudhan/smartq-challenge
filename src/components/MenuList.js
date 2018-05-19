import React from 'react';

const MenuList=(props)=>{
  return(
    <nav className="navbar navbar__side">
      <a href="#all" className="navbar__item active" onClick={props.setActiveMenu}>All</a>
      <a href="#oriental" className="navbar__item" onClick={props.setActiveMenu}>Oriental</a>        
      <a href="#chinesecombo" className="navbar__item" onClick={props.setActiveMenu}>Chinese Combos</a>        
      <a href="#chinesestarter" className="navbar__item" onClick={props.setActiveMenu}>Chinese Starter</a>        
      <a href="#salads" className="navbar__item" onClick={props.setActiveMenu}>Salads</a>        
    </nav>
  )
}

export default MenuList;