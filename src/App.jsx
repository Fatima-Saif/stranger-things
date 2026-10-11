import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Characters from './components/Characters'
import Episodes from './components/Episodes'
import UpsideDown from './components/UpsideDown'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const handleNavigate = (tab) => {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-container">
      <Navbar onNavigate={handleNavigate} activeTab={activeTab} />

      <main className="main-content">
        {activeTab === 'home' && <Hero onExplore={handleNavigate} />}
        {activeTab === 'characters' && <Characters />}
        {activeTab === 'episodes' && <Episodes />}
        {activeTab === 'upsidedown' && <UpsideDown />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
