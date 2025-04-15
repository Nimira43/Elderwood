const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='background' />
      </div>
      <div className='hero-layout'>
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className="hero-text">
              <h1>Crafting Innovative</h1>
              <h1>solutions for the</h1>
              <h1>Evolving Digital World.</h1>
            </div>
          </div>
        </header>
      </div>
    </section>
  )
}

export default Hero
