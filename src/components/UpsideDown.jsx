import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './UpsideDown.css'

const UpsideDown = () => {
  const [flicker, setFlicker] = useState(false)

  const triggerFlicker = () => {
    setFlicker(true)
    setTimeout(() => setFlicker(false), 800)
  }

  return (
    <section className={`upsidedown-section ${flicker ? 'flicker-active' : ''}`}>
      <div className="portal-container">
        <span className="dimension-badge">DIMENSION 001 &bull; LEVEL: CRITICAL</span>
        <h2 className="portal-title">THE UPSIDE DOWN</h2>
        <p className="portal-desc">
          An alternate dimension existing in parallel to the human world.
          It contains the same locations and infrastructure as the real world,
          but is decaying, dark, overgrown with spore-producing tendrils, and ruled by the Mind Flayer.
        </p>

        <div className="portal-interactive-box">
          <button className="flicker-btn" onClick={triggerFlicker}>
            ⚡ Flick the Christmas Lights
          </button>
        </div>

        <div className="threat-grid">
          <div className="threat-card">
            <span className="threat-level">ALPHA THREAT</span>
            <h3>The Mind Flayer</h3>
            <p>A malevolent shadow entity with a hive mind controlling all creatures in the dimension.</p>
          </div>

          <div className="threat-card">
            <span className="threat-level">BETA THREAT</span>
            <h3>Demogorgon</h3>
            <p>Predatory creature with petal-like teeth and impervious thick skin, attracted by blood.</p>
          </div>

          <div className="threat-card">
            <span className="threat-level">GAMMA THREAT</span>
            <h3>Demo-dogs</h3>
            <p>Juvenile stage quadrupeds operating in lethal swarms through Hawkins subterranean tunnels.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpsideDown
