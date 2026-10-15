import { useState } from 'react'
import { Link } from 'react-router'
import landingAnimation from '../assets/landing_animation.mp4'

function Landing() {
  const [finished, setFinished] = useState(false)

  return (
    <main className={finished ? 'landing finished' : 'landing'}>
      <video
        src={landingAnimation}
        autoPlay
        muted
        playsInline
        onEnded={() => setFinished(true)}
        onError={() => setFinished(true)}
      />
      <h1>
        <Link to="/home" state={{ fromLanding: true }} viewTransition>
          OneTwoUs
        </Link>
      </h1>
    </main>
  )
}

export default Landing
