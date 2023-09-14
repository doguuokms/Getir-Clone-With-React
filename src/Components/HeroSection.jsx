// import React from 'react'

const HeroSection = () => {
  return (
   <section className="hero-section">
     <div className='relative w-full before:bg-gradient-to-r from-purple-900 before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:z-10'>
      <img className='w-full h-[500px] object-cover	' src="src/assets/img/getirhero.png" alt="" />
    </div>
   </section>
  )
}

export default HeroSection