import { useState } from 'react'

import './App.css'
import HomePage from "./Sections/HomepageSection/HomePage"
import SignUpAndLogInPage from './Sections/SignUp&LogInPage/SignUp&LogInPage'




function App() {


  return (
    <div className="App">
      {/* <HomePage/> */}
      <SignUpAndLogInPage/>
    </div>
  )
}

export default App
