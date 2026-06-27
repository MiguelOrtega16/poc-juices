import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { THEMES, type ThemeId } from '../data/themes'

/**
 * Floating preview control — re-skins the whole site with an alternate
 * tone/style theme (persisted to localStorage). A demo affordance for
 * choosing a direction, not a production feature.
 */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(
    () => (typeof localStorage !== 'undefined' && (localStorage.getItem('fb-theme') as ThemeId)) || 'editorial'
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('fb-theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0]

  return (
    <div className={`theme-fab ${open ? 'is-open' : ''}`}>
      {open && (
        <div className="theme-panel" role="menu" aria-label="Preview a theme">
          <div className="theme-panel__head">
            <span>Preview a tone</span>
            <Link to="/style-lab" className="theme-panel__link" onClick={() => setOpen(false)}>
              Compare all <Icon name="arrow" size={13} />
            </Link>
          </div>
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={t.id === theme}
              className={`theme-opt ${t.id === theme ? 'is-active' : ''}`}
              onClick={() => {
                setTheme(t.id)
                setOpen(false)
              }}
            >
              <span className="theme-opt__sw">
                {t.swatches.map((c, i) => (
                  <span key={i} style={{ background: c }} />
                ))}
              </span>
              <span className="theme-opt__txt">
                <strong>{t.name}</strong>
                <span>{t.type}</span>
              </span>
              {t.id === theme && <Icon name="check" size={15} className="theme-opt__check" />}
            </button>
          ))}
        </div>
      )}
      <button className="theme-fab__btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Preview a different theme">
        <span className="theme-fab__dots">
          {current.swatches.slice(0, 3).map((c, i) => (
            <span key={i} style={{ background: c }} />
          ))}
        </span>
        <span className="theme-fab__name">{current.name}</span>
        <Icon name={open ? 'minus' : 'plus'} size={15} />
      </button>
    </div>
  )
}
