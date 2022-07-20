import { useState } from 'react'

import './App.css'

import HomepageMainPicture from './Sections/HompageMainPicture'
import Navbar from './Sections/Navbar'
import NewsletterSection from './Sections/NewsletterSection'

import TwoPic from './Sections/TwoPic'

import Footer from './Sections/Footer'

function App() {


  return (
    <div className="App">
      <Navbar/>
      <HomepageMainPicture/>
      <TwoPic/>
      <NewsletterSection/>
      <Footer/>
    </div>
  )
}

export default App
