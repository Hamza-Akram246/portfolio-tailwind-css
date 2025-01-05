import React from 'react'
import Navbar from '../components/Navbar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%", backgroundPosition: "left 150px top 180px "}}>
        <Navbar />
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>

          <div className='text-[50px] sm:text-[70px] font-bold leading-tight flex justify-center items-center'>
            <div>
           
              <p data-aos="zoom-in-up">Hamza</p>
              <p data-aos="zoom-in-up">Akram</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
