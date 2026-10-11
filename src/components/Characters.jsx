import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Characters.css'

const charactersData = [
  {
    id: 1,
    name: 'Eleven (Jane Hopper)',
    alias: '011 / El',
    actor: 'Millie Bobby Brown',
    status: 'Alive',
    abilities: 'Telekinesis, Telepathy, Remote Viewing',
    quote: '"Friends don’t lie."',
    description: 'Raised in Hawkins National Laboratory, Eleven escaped with psychokinetic abilities that made her the prime defense against threats from the Upside Down.'
  },
  {
    id: 2,
    name: 'Mike Wheeler',
    alias: 'The Paladin',
    actor: 'Finn Wolfhard',
    status: 'Alive',
    abilities: 'Leadership, Strategic Thinking, D&D Lore',
    quote: '"If anyone asks where I am, I\'ve left the country."',
    description: 'The heart and de facto leader of the party. Mike was the first to shelter Eleven and remains fiercely loyal to his friends.'
  },
  {
    id: 3,
    name: 'Will Byers',
    alias: 'Will the Wise / The Cleric',
    actor: 'Noah Schnapp',
    status: 'Alive (Connected)',
    abilities: 'True Sight, Upside Down Sensitivity',
    quote: '"He likes it cold."',
    description: 'Surviving a week trapped inside the Upside Down altered Will forever, creating a deep telepathic link with the Mind Flayer.'
  },
  {
    id: 4,
    name: 'Dustin Henderson',
    alias: 'The Bard',
    actor: 'Gaten Matarazzo',
    status: 'Alive',
    abilities: 'Genius Intellect, Engineering, Radio Communications',
    quote: '"Never tell me the odds."',
    description: 'The tech and scientific genius of the squad who built Cerebro and can crack any Soviet code or dimension mystery.'
  },
  {
    id: 5,
    name: 'Lucas Sinclair',
    alias: 'The Ranger',
    actor: 'Caleb McLaughlin',
    status: 'Alive',
    abilities: 'Wrist Rocket Marksman, Tactical Combat',
    quote: '"First of all, it\'s a wrist rocket."',
    description: 'Pragmatic, fiercely courageous, and always ready with his slingshot and fireworks to defend Hawkins against extra-dimensional monsters.'
  },
  {
    id: 6,
    name: 'Jim Hopper',
    alias: 'Chief of Police',
    actor: 'David Harbour',
    status: 'Alive',
    abilities: 'Hand-to-Hand Combat, Firearms, Survivalist',
    quote: '"Mornings are for coffee and contemplation."',
    description: 'Hawkins former Police Chief and Eleven\'s adoptive father who will cross continents and fight Demogorgons with bare hands.'
  }
]

const Characters = () => {
  const [selectedChar, setSelectedChar] = useState(charactersData[0])

  return (
    <section className="characters-section">
      <div className="section-header">
        <h2 className="section-title">HAWKINS CHARACTERS</h2>
        <p className="section-subtitle">The heroes fighting between reality and the abyss</p>
      </div>

      <div className="characters-layout">
        <div className="characters-grid">
          {charactersData.map((char) => (
            <motion.div
              key={char.id}
              className={`char-card ${selectedChar.id === char.id ? 'active' : ''}`}
              onClick={() => setSelectedChar(char)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="char-card-header">
                <h3>{char.name}</h3>
                <span className="char-alias">{char.alias}</span>
              </div>
              <p className="char-actor">Portrayed by: {char.actor}</p>
              <div className="char-pill">{char.status}</div>
            </motion.div>
          ))}
        </div>

        <div className="char-detail-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChar.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="detail-content"
            >
              <span className="detail-tag">{selectedChar.alias}</span>
              <h3 className="detail-name">{selectedChar.name}</h3>
              <blockquote className="detail-quote">{selectedChar.quote}</blockquote>
              
              <div className="detail-info-block">
                <h4>Abilities &amp; Strengths</h4>
                <p>{selectedChar.abilities}</p>
              </div>

              <div className="detail-info-block">
                <h4>Backstory</h4>
                <p>{selectedChar.description}</p>
              </div>

              <div className="detail-meta">
                <span>Actor: <strong>{selectedChar.actor}</strong></span>
                <span>Status: <strong className="status-highlight">{selectedChar.status}</strong></span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Characters
