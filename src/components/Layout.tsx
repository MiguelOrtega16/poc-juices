import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useReveal } from '../hooks/useReveal'

export function Layout() {
  const location = useLocation()
  useReveal(location.pathname)

  // Scroll to top on navigation (but respect in-page anchors)
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname, location.hash])

  return (
    <div className="app-shell">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
