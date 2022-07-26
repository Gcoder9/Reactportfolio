import React from 'react'

function Nav({ setPage }) {
  return (
    <header>
    <h1>React Portfolio</h1>
      <a href="#about" onClick={() => setPage('about')}>About</a>
      <a href="#contact" onClick={() => setPage('contact')}>Contact</a>
      <a href="#resume" onClick={() => setPage('resume')}>Resume</a>
    </header>
    
  )
}

export default Nav