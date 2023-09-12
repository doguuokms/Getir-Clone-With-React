// import { useState } from 'react'
import './App.css'
import './tailwind.css'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Categories from './Components/Categories'
import Campaign from './Components/Campaign'
import Favorites from './Components/Favorites'
import MobileApp from './Components/MobileApp'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HeroSection />
    <Categories />
    <Campaign />
    <Favorites />
    <MobileApp />
    <Cards />
    <Footer />
    </>
  )
}

export default App
