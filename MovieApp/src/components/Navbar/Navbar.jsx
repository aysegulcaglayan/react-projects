import React from 'react'
import { PiFilmReelFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const favouriteCounter=useSelector(store=>store.favourites.movies.length)
  return (
    <nav className='navbar'>
     <div className='left'>
      <Link to="/" style={{color:"white"}}> 
        <h1>MovieApp</h1>
        </Link>
     </div>
     <div className='center'>
     <PiFilmReelFill />
     </div>
     <div className='right'>
        <ul>
            <li>
              <Link to="/" style={{color:"white"}} >
            <TiHome />
            </Link>
            </li>
            <li>
              <Link to="/my-list" style={{color:"white"}}>
            <FaHeart />
            <div className="favourite-count">
            {favouriteCounter}
            </div>
            </Link>
            </li>
        </ul>
  
     </div > 
    </nav>
      
  
  )
}

export default Navbar
