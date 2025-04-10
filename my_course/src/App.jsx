import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/Header'
import './App.css'
import { courses } from './data'
import Course from './course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="course-main">{
        courses?.map((course) =>
          <Course key={course.id} course={course} />



        )
      }</div>
    </>
  )
}

export default App
