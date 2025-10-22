import { useState } from 'react'
import { navLinks } from '../../constants'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {

    }
  }, [])

  return (
    <header className='navbar'>
      <div className='inner'>
        <a 
          href="#hero" 
          className='logo logo-text '
        >
          NimiraTech
        </a>
        <nav className='desktop'>
          <ul>
            {navLinks.map(({ link, name}) => (
              <li
                key={name}
                className='group'
              >
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline' />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a 
          href="#contact"
          className='contact-btn group'  
        >
          <div className='inner'>
            <span>Contact Us</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default NavBar
