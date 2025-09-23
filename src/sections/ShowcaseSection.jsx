const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
      <div className='w-full'>
        <div className='showcaseLayout'>
          <div className='first-project-wrapper'>
            <div className='image-wrapper'>
              <img 
                src='/images/image-1.png' 
                alt="The Labyrinth - 1" 
              />
            </div>
            <div className='text-content'>
              <h2>Enter the maze. Face the trials. Become legend within The Labyrinth</h2>
              <p className='text-white-50 md:text-xl'>Navigate treacherous corridors, evade cunning traps, and uncover the secrets buried deep within an ancient maze of nightmares.</p>
            </div>
          </div>
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project'>
              <div>
                <img
                  src='/images/image-2.png'
                  alt='The Labyrinth - 2'
                />
              </div>
            </div>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default ShowcaseSection
