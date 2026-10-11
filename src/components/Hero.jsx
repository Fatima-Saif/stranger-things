import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = ({ onExplore }) => {
  const heroRef = useRef(null)
  const revealRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const reveal = revealRef.current
    if (!hero || !reveal) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let x = mouseX
    let y = mouseY
    let visible = false
    let animId

    const animate = () => {
      x += (mouseX - x) * 0.08
      y += (mouseY - y) * 0.08

      reveal.style.setProperty('--x', `${x}px`)
      reveal.style.setProperty('--y', `${y}px`)

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    const move = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      if (!visible) {
        visible = true
        reveal.classList.add('active')
      }
    }

    const touchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = hero.getBoundingClientRect()
        mouseX = e.touches[0].clientX - rect.left
        mouseY = e.touches[0].clientY - rect.top

        if (!visible) {
          visible = true
          reveal.classList.add('active')
        }
      }
    }

    const leave = () => {
      visible = false
      reveal.classList.remove('active')
    }

    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)
    hero.addEventListener('touchmove', touchMove, { passive: true })
    hero.addEventListener('touchend', leave)

    return () => {
      cancelAnimationFrame(animId)
      hero.removeEventListener('mousemove', move)
      hero.removeEventListener('mouseleave', leave)
      hero.removeEventListener('touchmove', touchMove)
      hero.removeEventListener('touchend', leave)
    }
  }, [])

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 14 } },
  }

  return (
    <div className="hero" ref={heroRef}>
      <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
        <motion.div className="left" variants={item}>
          <h1 className="st-title">
            STRANGER<br />THINGS
          </h1>
          <motion.p className="st-desc" variants={item}>
            When the lights begin to flicker and reality bends,
            a hidden world awakens beneath Hawkins.
            Some doors, once opened, can never be closed.
          </motion.p>
          <motion.div className="btn-wrap" variants={item}>
            <button className="st-btn" onClick={() => onExplore('upsidedown')}>
              Enter the Upside Down
            </button>
            <button className="st-btn-secondary" onClick={() => onExplore('characters')}>
              View Characters
            </button>
          </motion.div>
        </motion.div>

        <motion.div className="right" variants={item}>
          <div className="right-card">
            <h2 className="st-subtitle">The Mind Flayer</h2>
            <motion.p className="st-text" variants={item}>
              Shadows creep from another dimension, consuming everything in their path.
              Unravel the mystery and face the darkness head-on.
              Will you survive the terror of the Upside Down?
            </motion.p>
            <button className="explore-link" onClick={() => onExplore('episodes')}>
              Browse All Seasons &rarr;
            </button>
          </div>
        </motion.div>
      </motion.div>

      <div className="fire-reveal" ref={revealRef}></div>

      <div className="interactive-hint">
        <span>✨ Move cursor or drag finger to reveal hidden dimension</span>
      </div>
    </div>
  )
}

export default Hero
