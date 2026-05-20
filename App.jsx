import { useState } from 'react'
import './App.css'

function App() {
  const [bullet, setBullet] = useState('')
  const [improvedBullet, setImprovedBullet] = useState('')

  function handleBulletChange(event) {
    setBullet(event.target.value)
  }

  function handleImproveClick() {
    const trimmedBullet = bullet.trim()

    if (trimmedBullet === '') {
      setImprovedBullet('Please type a resume bullet first.')
      return
    }

    setImprovedBullet(`Improved: Successfully ${trimmedBullet.toLowerCase()}.`)
  }

  function handleClearClick() {
    setBullet('')
    setImprovedBullet('')
  }

  return (
    <main className="app">
      <section className="intro">
        <h1>Resume Bullet Improver</h1>
        <p>
          Type a simple resume bullet, click Improve, and see a stronger version
          below.
        </p>
      </section>

      <section className="card">
        <label htmlFor="bullet">Original resume bullet</label>
        <textarea
          id="bullet"
          value={bullet}
          onChange={handleBulletChange}
          placeholder="Example: Managed customer emails"
          rows="5"
        />

        <div className="button-row">
          <button type="button" onClick={handleImproveClick}>
            Improve
          </button>
          <button type="button" className="secondary-button" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </section>

      <section className="output">
        <h2>Improved bullet</h2>
        <p>
          {improvedBullet ||
            'Your improved resume bullet will appear here after you click Improve.'}
        </p>
      </section>
    </main>
  )
}

export default App
