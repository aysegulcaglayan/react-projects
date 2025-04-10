import React, { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import {getMovieDetailById} from '../../redux/slices/movieDetailSlice'
import { API_IMG } from '../../constants/api';
import './MovieDetail.css'
import { FaStar } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa'
import { IoIosRemoveCircle } from "react-icons/io";
import { addFavourite,removeFavourite } from '../../redux/slices/favouriteSlices';
import { store} from '../../redux/store';




const MovieDetail = () => {
    const {movieDetail}=useSelector((store)=>store.movieDetail)
    const { id } = useParams();
    const {title,
        backdrop_path,
        genres,
        original_language,
        poster_path,
        vote_average,
        overview,
        release_date
    }=movieDetail;
    const dispatch=useDispatch()
    const {movies}=useSelector((store)=>store.favourites);
console.log(movies)


const [isFavourite,setIsFavourite]=useState(false)

useEffect(()=>{
    const isFavourite=movies?.find((movie)=>movie.id ==id)
    if(isFavourite){
        setIsFavourite(true)
    }else{
        setIsFavourite(false)
    }
},[movies])



 useEffect(()=>{
    dispatch(getMovieDetailById(id))
console.log("getMovieDetailById()");},[id])


const isFavourites=useSelector(store=>store.favourites.movies?.some(movie=>movie.id===id))






 
const AddFavourite=()=>{
 const payload={
    id,
    title,
    poster_path,
    vote_average,
 }
  dispatch(addFavourite(payload))
}
const RemoveFavourite=()=>{
const payload={
    id,
}
dispatch(removeFavourite(payload))
}


  return (
  <section className='movieDetail'>
    <img className='backdrop' src={`${API_IMG}/${movieDetail?.backdrop_path}`} alt={movieDetail.title}/>
   <div className="container ">
    <div className="row justify-content-space-between">
        <div className="col-7">
            <h1>{movieDetail?.title}</h1>
        </div>
        <div className="col-5">
            <div className="add-favourite-remove">
            <button className={isFavourite?'btn remove':' btn add'} onClick={isFavourites?RemoveFavourite:AddFavourite}> 
            {isFavourites? 'Remove Favourite':'Add Favourite'}</button>
        </div>
        </div>
    </div>
    <div className="row poster align-items-center ">
        <div className="col-5">
        <img src= {`${API_IMG}/${poster_path}`} alt={movieDetail.title}/>
        </div>
        <div className="col-7 ">
            <div className="overview">
            <p>{movieDetail?.overview}</p>
            </div>
            <div className="vote">
             
                <p> <FaStar /> {movieDetail?.vote_average?.toFixed(1)}</p>
            </div>
            <div className="year">
             <p><span style={{ color: "#ffae00" }}>Year:</span> {movieDetail?.release_date?.split("-")[0]}</p>
            </div>
            <div className="genre">
          
                <ul>
                <span style={{ color: "#ffae00" }}>Genre:</span> 
                            {movieDetail.genres && movieDetail.genres.map((genre) => (
                              <li key={genre?.id} className="movie-genre">{genre?.name},</li>
                            ))}
                        </ul>
               
            </div>
          <div className="language">
  
                        <ul>
                        <span  style={{ color: "#ffae00" }}>Language:</span>
                            {movieDetail?.spoken_languages && movieDetail?.spoken_languages.map((language, index) => (
                                <li key={index}>{language?.english_name},</li>
                            ))}
                        </ul>
          </div>


          
        </div>
    </div>
   </div>
  </section>
  )
}

export default MovieDetail
