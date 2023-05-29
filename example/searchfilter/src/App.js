import React from 'react'
import "./App.css"
// imports component
import MenuFilter from "../src/Components/Menu"
import Card from "../src/Components/Card"
const App = () => {
  return (
    <div className='full_mainWrapper' >
<MenuFilter/>

  <Card/>
    </div>
  )
}

export default App