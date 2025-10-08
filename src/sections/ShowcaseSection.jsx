import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const projectRef1 = useRef(null)
  const projectRef2 = useRef(null)
  const projectRef3 = useRef(null)

  return (
    <section 
      id='work' 
      ref={sectionRef}
      className='app-showcase'
    >
      <div className='w-full'>
        <h1 className='text-white text-5xl text-center font-semibold pb-20'>The Labyrinth</h1>
        <div className='showcaselayout'>
          <div 
            ref={projectRef1}
            className='first-project-wrapper'
          >
            <div className='image-wrapper'>
              <img 
                className='border border-white'
                src='/images/image-1.png' 
                alt="The Labyrinth - 1" 
              />
            </div>
            <div className='text-content'>
              <h2>Enter the maze. Face the trials. Become legend within The Labyrinth</h2>
              <p className='text-white-50 md:text-xl mb-5'>Navigate treacherous corridors, evade cunning traps, and uncover the secrets buried deep within an ancient maze of nightmares.</p>
            </div>
          </div>
          <div className='project-list-wrapper overflow-hidden'>
            <div 
              ref={projectRef2}
              className='project'
            >
              <div className='image-wrapper'>
                <img
                  className='border border-white'
                  src='/images/image-2.png'
                  alt='The Labyrinth - 2'
                />
              </div>
              <h2 className='text-center'>Out on PS5, Xbox and Steam</h2>
            </div>
            <div 
              ref={projectRef3}
              className='project'
            >
              <div className='image-wrapper'>
                <img
                  className='border border-white'
                  src='/images/image-3.png'
                  alt='The Labyrinth - 3'
                />
              </div>
              <h2 className='text-center'>"Immense and challenging" - IGN 5/5</h2>
            </div>
          </div>
        </div>
      </div>     
    </section>
  )
}

export default ShowcaseSection
