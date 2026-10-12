import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { sections } from '../sections.js'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <Link className="logo" to="/home">
        OneTwoUs
      </Link>
      <nav>
        {sections.map(({ path, title }) => (
          <NavLink key={path} to={path}>
            {title}
          </NavLink>
        ))}
      </nav>
      <Link className="contact-link" to="/contact" aria-label="Contact">
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
