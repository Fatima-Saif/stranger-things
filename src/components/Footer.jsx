import React from 'react'
import './Footer.css'

const Footer = ({ onNavigate }) => {
  return (
    <footer className="st-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">STRANGER THINGS</div>
          <p className="footer-desc">
            An exploration into Hawkins, Indiana and the terrifying alternate reality beneath.
          </p>
        </div>

        <div className="footer-nav">
          <span onClick={() => onNavigate('home')}>Home</span>
          <span onClick={() => onNavigate('characters')}>Characters</span>
          <span onClick={() => onNavigate('episodes')}>Episodes</span>
          <span onClick={() => onNavigate('upsidedown')}>Upside Down</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Stranger Things Fan Portal. All rights reserved.
        </p>
        <div className="powered-tag">
          Powered by{' '}
          <a 
            href="https://falconface.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="falcon-link"
          >
            falconface
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
