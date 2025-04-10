import React, {  useEffect , useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getGenres } from '../../redux/slices/genreSlice'
import "../Genre/Genre.css"


const Genre = ({setselectedGenre}) => {
  const {genres} = useSelector((store) => store.genre); 
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getGenres());

  }, []);
  const [activeGenre,setActiveGenre]=useState(null)
  const handleGenre=(genre)=>{
    setselectedGenre(genre)
    setActiveGenre(genre.id)
  }


  
 
  return (
    <div className='genres'>
        <ul>
          {genres && genres.map((genre) => (
            <li className={`${activeGenre===genre.id ? 'active':''}`} onClick={()=>handleGenre(genre)}
             key={genre.id}>
  {genre.name}
</li>


))}
        </ul>
    </div>
  )
}



export default Genre
