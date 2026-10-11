import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ onNavigate, activeTab }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (tabId) => {
    onNavigate(tabId)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-brand-group" onClick={() => handleNavClick('home')}>
        <img src="/logo.svg" alt="Stranger Things Logo" className="nav-brand-icon" />
        <div className="nav-logo">STRANGER THINGS</div>
      </div>

      <div className={`nav-links-container ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li 
            className={activeTab === 'home' ? 'active-link' : ''} 
            onClick={() => handleNavClick('home')}
          >
            Home
          </li>
          <li 
            className={activeTab === 'characters' ? 'active-link' : ''} 
            onClick={() => handleNavClick('characters')}
          >
            Characters
          </li>
          <li 
            className={activeTab === 'episodes' ? 'active-link' : ''} 
            onClick={() => handleNavClick('episodes')}
          >
            Episodes
          </li>
          <li 
            className={activeTab === 'upsidedown' ? 'active-link' : ''} 
            onClick={() => handleNavClick('upsidedown')}
          >
            Upside Down
          </li>
        </ul>
        <button 
          className="nav-action-btn mobile-only"
          onClick={() => handleNavClick('upsidedown')}
        >
          Enter Upside Down
        </button>
      </div>

      <div className="nav-right">
        <button 
          className="nav-action-btn desktop-only"
          onClick={() => handleNavClick('upsidedown')}
        >
          Enter Upside Down
        </button>
        <button 
          className="nav-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
