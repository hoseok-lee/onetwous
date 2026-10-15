import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { sections } from '../sections.js'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/home'
  const isIntro = isHome && location.state?.fromLanding

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={['site-header', scrolled && 'scrolled', isHome && 'home', isIntro && 'intro']
        .filter(Boolean)
        .join(' ')}
    >
      <Link className="logo" to="/home" viewTransition>
        OneTwoUs
      </Link>
      <nav>
        {sections.map(({ path, title }) => (
          <NavLink key={path} to={path} viewTransition>
            {title}
          </NavLink>
        ))}
      </nav>
      <Link className="contact-link" to="/contact" aria-label="Contact" viewTransition>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </Link>
    </header>
  )
}

export default Header
