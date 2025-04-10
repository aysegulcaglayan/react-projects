import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import MyList from './Pages/MyList/MyList'
import Home from './Pages/Home/Home'
import {HOME,MY_LIST,MOVIE_DETAIL} from './constants/path'
import MovieDetail from './Pages/MovieDetail/MovieDetail'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className='App'>
   <Navbar/>
<Routes>
  <Route path={HOME} element={<Home/>} />
  <Route path={MY_LIST} element={<MyList/>} />
  <Route  path= {MOVIE_DETAIL} element={<MovieDetail/>}/>

 
</Routes>
    </div>
  )
}

export default App
 