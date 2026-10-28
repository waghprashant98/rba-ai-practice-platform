import { useEffect, useState } from 'react'
import { BookOpen, Calculator, ChevronRight, Heart, ShieldCheck, Sparkles, UserRound } from 'lucide-react'
import { getComponents } from './services/api'
import type { PracticeComponent } from './types'

export default function App() {
  const [studentId, setStudentId] = useState('')
  const [components, setComponents] = useState<PracticeComponent[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getComponents().then((data) => setComponents(data.components))
      .catch(() => setError('Could not connect to the backend. Start FastAPI and refresh this page.'))
      .finally(() => setLoading(false))
  }, [])

  function continueAsStudent() {
    const id = studentId.trim()
    if (id.length < 3) { setError('Enter a student ID with at least 3 characters.'); return }
    setError(`Student ID "${id}" entered. Database lookup and saved history will be added in a later milestone.`)
  }

  return <main className="page-shell">
    <header className="topbar"><a className="brand" href="/" aria-label="Little Steps home"><span className="brand-mark"><Heart size={19} fill="currentColor" /></span><span>little<span className="brand-accent">steps</span></span></a><span className="top-note"><ShieldCheck size={16} /> A gentle space to learn</span></header>
    <section className="hero"><div className="hero-copy"><div className="eyebrow"><Sparkles size={15} /> LITTLE STEPS, BIG DISCOVERIES</div><h1>Every child learns<br /><span>in their own way.</span></h1><p className="hero-description">Friendly practice for early maths, words and stories — made for little learners and the grown-ups who support them.</p><div className="hero-pills"><span><Heart size={14} /> Encouraging feedback</span><span><BookOpen size={14} /> Learning at your pace</span></div></div><div className="hero-art" aria-hidden="true"><div className="sun"></div><div className="rainbow rainbow-one"></div><div className="rainbow rainbow-two"></div><div className="cloud cloud-one"></div><div className="cloud cloud-two"></div><div className="hill hill-back"></div><div className="hill hill-front"></div><div className="flower flower-one">✿</div><div className="flower flower-two">✿</div><div className="art-caption">Little steps<br />every day <span>✦</span></div></div></section>
    <section className="welcome-grid">
      <article className="card student-card"><div className="card-icon student-icon"><UserRound size={23} /></div><p className="section-kicker">WELCOME BACK</p><h2>Ready to explore?</h2><p className="muted">Enter your student ID to continue your learning journey.</p><label htmlFor="studentId">Student ID</label><input id="studentId" value={studentId} onChange={(e) => { setStudentId(e.target.value); setError('') }} placeholder="e.g. LS-1042" autoComplete="off" /><button className="primary-button" onClick={continueAsStudent}>Continue learning <ChevronRight size={18} /></button>{error && <p className={error.startsWith('Could not') ? 'error-message' : 'notice-message'} role="status">{error}</p>}<p className="privacy-note"><ShieldCheck size={14} /> A student ID alone is not secure authentication. Parent access controls will be added before storing real student data.</p></article>
      <article className="card parent-card"><div className="parent-top"><div className="card-icon parent-icon"><Heart size={23} /></div><span className="parent-label">FOR PARENTS</span></div><h2>Be part of their progress.</h2><p className="muted">A calm overview of what your child is exploring and where a little extra practice may help.</p><ul className="parent-list"><li><span className="list-dot dot-peach"></span>See learning progress by topic</li><li><span className="list-dot dot-purple"></span>Celebrate effort and persistence</li><li><span className="list-dot dot-green"></span>Find the next activity to try</li></ul><button className="secondary-button" onClick={() => setError('Parent dashboard and secure sign-in are planned for a later milestone.')}>Parent dashboard <ChevronRight size={18} /></button></article>
    </section>
    <section className="components-section"><div className="section-heading"><div><p className="section-kicker">YOUR LEARNING ADVENTURE</p><h2>Explore 13 practice areas</h2></div><span className="count-badge">{components.length || 13} areas</span></div><p className="muted section-subtitle">Each area is planned for a 10-question session. Activities will adapt as the child responds.</p>{loading ? <p className="muted">Loading practice areas…</p> : <div className="component-grid">{components.map((component, index) => <article className="component-card" key={component.id}><div className={`component-icon icon-${index % 5}`}>{component.area === 'mathematics' ? <Calculator size={20} /> : <BookOpen size={20} />}</div><div className="component-meta">{component.area === 'mathematics' ? 'EARLY MATHS' : 'WORDS & STORIES'}</div><h3>{component.name}</h3><div className="component-footer"><span>10 questions planned</span><span className="component-arrow"><ChevronRight size={16} /></span></div></article>)}</div>}</section>
    <footer className="footer"><span>Made for curious little minds <span className="footer-heart">♥</span></span><span>Practice support, not an official assessment</span></footer>
  </main>
}
