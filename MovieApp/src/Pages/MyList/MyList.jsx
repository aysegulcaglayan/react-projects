import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MyList.css'
const MyList = () => {

const {movies}=useSelector(store=>store.favourites)






  return (
    <div className='my-list'>
     <ul>
      {
        movies?.map((movie)=>(
         <MovieCard key={movie.id} movie={movie}/>
        ))

        
      }
     </ul>
    </div>
  )
}

export default MyList
