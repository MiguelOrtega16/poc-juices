import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { SITE } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo variant="light" />
            <p className="footer__tag">
              The leading supplier of 100% all-natural, fresh fruit-based cocktail mixes.
              Quality · Consistency · Volume.
            </p>
          </div>

          <nav className="footer__col" aria-label="Recipes">
            <h4>Recipes</h4>
            <Link to="/drink-machine-recipes">Drink Machine</Link>
            <Link to="/blender-recipes">Blender</Link>
            <Link to="/batch-recipes">Batch</Link>
            <Link to="/machine-maintenance">Maintenance</Link>
          </nav>
          <nav className="footer__col" aria-label="Company">
            <h4>Company</h4>
            <Link to="/ingredients">Ingredients</Link>
            <Link to="/equipment-programs">Equipment Programs</Link>
            <Link to="/distribution">Distribution</Link>
            <Link to="/our-story">Our Story</Link>
          </nav>
          <nav className="footer__col" aria-label="Connect">
            <h4>Connect</h4>
            <Link to="/contact">Contact</Link>
            <a href={SITE.playlists.channel} target="_blank" rel="noreferrer">Recipe videos ↗</a>
            <Link to="/style-lab">Style lab (preview tones)</Link>
            <Link to="/directions">Other directions</Link>
            <span className="footer__loc">Serving {SITE.serving}</span>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Fresh Blendz Commercial · All rights reserved</span>
          <span className="footer__script">Fresh is Best</span>
        </div>
      </div>
    </footer>
  )
}
