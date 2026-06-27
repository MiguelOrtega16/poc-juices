import type { Video } from '../data/types'
import { VideoGallery } from './video/VideoGallery'
import { Icon } from './Icon'

type RecipesViewProps = {
  videos: Video[]
  countLabel: string
  tipTitle: string
  tips: string[]
  playlistUrl?: string
  filterable?: boolean
}

/** Shared editorial body for the recipe pages: count + pro-tips + filterable index. */
export function RecipesView({ videos, countLabel, tipTitle, tips, playlistUrl, filterable = true }: RecipesViewProps) {
  return (
    <>
      <section className="section section--tight">
        <div className="container recipe-intro">
          <div className="recipe-intro__lead reveal">
            <p className="recipe-count">
              <span className="recipe-count__no">{videos.length}</span>
              <span className="recipe-count__label">{countLabel}</span>
            </p>
            <p className="lead measure">
              Every recipe is a short, step-by-step video — tap any drink to watch it full-screen.
              Same build, every bartender, every property.
            </p>
            {playlistUrl && (
              <a className="link-arrow" href={playlistUrl} target="_blank" rel="noreferrer">
                Watch the full playlist on YouTube <Icon name="arrowUp" size={16} />
              </a>
            )}
          </div>

          <aside className="recipe-tips reveal" data-delay="1">
            <h3 className="recipe-tips__title">{tipTitle}</h3>
            <ul>
              {tips.map((t) => (
                <li key={t}>
                  <Icon name="check" size={17} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <VideoGallery videos={videos} filterable={filterable} />
        </div>
      </section>
    </>
  )
}
