import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'

export function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="notfound__no">404</div>
        <h1>This page spilled.</h1>
        <p className="lead">We couldn’t find what you were looking for — but there are plenty of fresh drinks this way.</p>
        <div className="notfound__actions">
          <Link to="/" className="btn">Back to Home <Icon name="arrowUp" size={16} /></Link>
          <Link to="/drink-machine-recipes" className="btn btn--ghost">Browse Recipes</Link>
        </div>
      </div>
    </section>
  )
}
