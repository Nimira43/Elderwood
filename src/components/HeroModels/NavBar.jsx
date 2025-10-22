const NavBar = () => {
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
            {navLinks}
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
