import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Episodes.css'

const seasonsData = [
  {
    season: 1,
    title: 'Season 1: The Vanishing of Will Byers',
    year: '2016',
    episodesCount: '8 Episodes',
    summary: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    episodes: [
      { num: 1, title: 'Chapter One: The Vanishing of Will Byers', duration: '49m', desc: 'On his way home from a friend’s house, young Will sees something terrifying.' },
      { num: 2, title: 'Chapter Two: The Weirdo on Maple Street', duration: '56m', desc: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods.' },
      { num: 3, title: 'Chapter Three: Holly, Jolly', duration: '52m', desc: 'An increasingly concerned Joyce believes Will is communicating with her through lights.' },
      { num: 4, title: 'Chapter Four: The Body', duration: '51m', desc: 'Refusing to believe Will is dead, Joyce tries to connect with her son.' }
    ]
  },
  {
    season: 2,
    title: 'Season 2: The Mind Flayer Awakens',
    year: '2017',
    episodesCount: '9 Episodes',
    summary: 'It’s 1984 and the citizens of Hawkins are still reeling from the horrors of the Demogorgon. But a bigger, more sinister entity threatens those who survived.',
    episodes: [
      { num: 1, title: 'Chapter One: MADMAX', duration: '48m', desc: 'As the town preps for Halloween, a high-scoring rival shakes up things at the arcade.' },
      { num: 2, title: 'Chapter Two: Trick or Treat, Freak', duration: '56m', desc: 'After Will sees something terrible on trick-or-treat night, Mike wonders if Eleven is still out there.' },
      { num: 3, title: 'Chapter Three: The Pollywog', duration: '51m', desc: 'Dustin adopts a strange new pet, and Eleven grows increasingly impatient.' },
      { num: 4, title: 'Chapter Four: Will the Wise', duration: '46m', desc: 'An ailing Will opens up to Joyce -- with horrifying results.' }
    ]
  },
  {
    season: 3,
    title: 'Season 3: The Battle of Starcourt',
    year: '2019',
    episodesCount: '8 Episodes',
    summary: 'In the summer of 1985 in Hawkins, romance blossoms and the new Starcourt Mall opens, but danger looms as old and new enemies threaten everything.',
    episodes: [
      { num: 1, title: 'Chapter One: Suzie, Do You Copy?', duration: '51m', desc: 'Summer brings new jobs and nascent romance. But the vibe shifts when Dustin’s radio picks up a Russian broadcast.' },
      { num: 2, title: 'Chapter Two: The Mall Rats', duration: '50m', desc: 'Scientists detect strange magnetic anomalies while Billy experiences disturbing hallucinations.' },
      { num: 3, title: 'Chapter Three: The Case of the Missing Lifeguard', duration: '50m', desc: 'El and Max seek Heather, and Dustin and Steve stage a stakeout.' }
    ]
  },
  {
    season: 4,
    title: 'Season 4: The Curse of Vecna',
    year: '2022',
    episodesCount: '9 Episodes',
    summary: 'Separated by distance but united against a dark secret that connects Hawkins to the Creel House, the team confronts Vecna.',
    episodes: [
      { num: 1, title: 'Chapter One: The Hellfire Club', duration: '1h 16m', desc: 'El struggles to fit in at school. Joyce receives a mysterious package. A sinister player strikes.' },
      { num: 4, title: 'Chapter Four: Dear Billy', duration: '1h 17m', desc: 'Max is in grave danger and running out of time. A patient at Pennhurst asylum has visitors.' },
      { num: 7, title: 'Chapter Seven: The Massacre at Hawkins Lab', duration: '1h 38m', desc: 'Hopper braces to fight a monster. Dustin deciphers Vecna’s motives and unlocks a portal.' }
    ]
  }
]

const Episodes = () => {
  const [activeSeason, setActiveSeason] = useState(0)
  const current = seasonsData[activeSeason]

  return (
    <section className="episodes-section">
      <div className="section-header">
        <h2 className="section-title">EPISODES &amp; SEASONS</h2>
        <p className="section-subtitle">Chronicles of Hawkins through the Upside Down</p>
      </div>

      <div className="season-tabs">
        {seasonsData.map((s, idx) => (
          <button
            key={s.season}
            className={`season-tab-btn ${activeSeason === idx ? 'active' : ''}`}
            onClick={() => setActiveSeason(idx)}
          >
            Season {s.season}
          </button>
        ))}
      </div>

      <motion.div
        key={activeSeason}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="season-content"
      >
        <div className="season-meta-box">
          <div className="meta-left">
            <h3>{current.title}</h3>
            <span className="year-pill">{current.year}</span>
            <span className="ep-count">{current.episodesCount}</span>
          </div>
          <p className="season-summary">{current.summary}</p>
        </div>

        <div className="episodes-list">
          {current.episodes.map((ep) => (
            <div key={ep.num} className="episode-row">
              <div className="ep-num">{ep.num}</div>
              <div className="ep-details">
                <div className="ep-row-header">
                  <h4>{ep.title}</h4>
                  <span className="ep-time">{ep.duration}</span>
                </div>
                <p>{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Episodes
