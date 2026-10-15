import { useLocation } from 'react-router'
import homeBackground from '../assets/home_background.mp4'

function Home() {
  const fromLanding = useLocation().state?.fromLanding

  return (
    <main>
      <video
        className={fromLanding ? 'home-video intro' : 'home-video'}
        src={homeBackground}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
    </main>
  )
}

export default Home
