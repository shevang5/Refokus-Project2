import React from 'react'
// import Styles from './App.module.css'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  console.log("hello world!");
const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className=' body w-full overflow-hidden h-full bg-black font-["satoshi"] '  >
      
      <Navbar/>
      <Work/>
      

      
      <Stripes  />
      
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App