import { useState } from 'react'

import './App.css'
import Currency from './Currency/currency'

function App() {


  return (
    <div style={{ display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column" }} >
      <Currency />
    </div>
  )
}

export default App
