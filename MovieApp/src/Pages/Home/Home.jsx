import React, { useState } from 'react'
import Genre from '../../components/Genre/Genre'
import MovieList from '../../components/MovieList/MovieList'
import './Home.css'
import Loading from'../../components/Loading/Loading'
const Home = () => {

  const[selectedGenre,setselectedGenre]=useState(null)

  return (
    <div className='Home'>
      <Genre setselectedGenre={setselectedGenre} />
      <MovieList selectedGenre={selectedGenre} />
    </div>
  )
}

export default Home
