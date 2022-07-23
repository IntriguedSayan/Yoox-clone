import { useState } from 'react'

import './App.css'
import HomePage from "./Sections/HomepageSection/HomePage"
import MenProductPage from './Sections/MenProductPage/MenProductPage'
import SignUpAndLogInPage from './Sections/SignUp&LogInPage/SignUp&LogInPage'




function App() {


  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <SignUpAndLogInPage/> */}
      <MenProductPage/>
    </div>
  )
}

export default App
