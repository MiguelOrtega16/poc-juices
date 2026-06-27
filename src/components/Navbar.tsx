import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from '../data/nav'
import { Logo } from './Logo'
import { Icon } from './Icon'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Fresh Blendz Commercial home">
          <Logo />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV.map((item) =>
            item.children ? (
              <div className="nav__group" key={item.label}>
                <button className="nav__link nav__link--group" type="button">
                  {item.label}
                  <Icon name="plus" size={13} className="nav__caret" />
                </button>
                <div className="nav__menu">
                  {item.children.map((c) => (
                    <NavLink key={c.to} to={c.to} className="nav__menu-link">
                      <span>{c.label}</span>
                      <Icon name="arrowUp" size={15} />
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <Link to="/contact" className="btn nav__cta">
          Distribution
          <Icon name="arrowUp" size={16} />
        </Link>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className="nav__mobile" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((item, i) =>
            item.children ? (
              <div className="nav__m-group" key={item.label}>
                <button
                  className="nav__m-link nav__m-toggle"
                  onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                  aria-expanded={openGroup === item.label}
                >
                  <span className="nav__m-no">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                  <Icon name={openGroup === item.label ? 'minus' : 'plus'} size={20} className="nav__m-plus" />
                </button>
                <div className="nav__m-sub" hidden={openGroup !== item.label}>
                  {item.children.map((c) => (
                    <NavLink key={c.to} to={c.to} className="nav__m-sublink">
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav__m-link">
                <span className="nav__m-no">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </NavLink>
            )
          )}
          <Link to="/contact" className="btn btn--block nav__m-cta">
            Contact Us for Distribution
            <Icon name="arrowUp" size={16} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
