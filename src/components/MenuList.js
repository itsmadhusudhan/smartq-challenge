import React from 'react';

const MenuList=()=>{
  return(
    <nav className="navbar">
      <a href="#all" className="navbar__item">All</a>
      <a href="#oriental" className="navbar__item">Oriental</a>        
      <a href="#chinesecombo" className="navbar__item">Chinese Combos</a>        
      <a href="#chinesestarter" className="navbar__item">Chinese Starter</a>        
      <a href="#salads" className="navbar__item">Salads</a>        
    </nav>
  )
}

export default MenuList;