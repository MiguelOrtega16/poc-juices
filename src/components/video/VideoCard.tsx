import type { Video } from '../../data/types'
import { Icon } from '../Icon'

type VideoCardProps = {
  video: Video
  onPlay: (video: Video) => void
  index?: number
}

/**
 * Poster-first video tile (a YouTube "facade"). Loads only a thumbnail image
 * until clicked — keeps the recipe index fast even with dozens of videos.
 */
export function VideoCard({ video, onPlay, index = 0 }: VideoCardProps) {
  const thumb = video.thumb ?? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
  return (
    <button
      className="vcard"
      data-cat={video.category}
      style={{ animationDelay: `${(index % 8) * 0.05}s` }}
      onClick={() => onPlay(video)}
      aria-label={`Play ${video.title} recipe video`}
    >
      <span className="vcard__media">
        <img src={thumb} alt="" loading="lazy" />
        <span className="vcard__play">
          <Icon name="play" size={20} />
        </span>
      </span>
      <span className="vcard__meta">
        {video.category && <span className="vcard__cat">{video.category}</span>}
        <span className="vcard__no">{String(index + 1).padStart(2, '0')}</span>
      </span>
      <span className="vcard__title">{video.title}</span>
      {video.blurb && <span className="vcard__blurb">{video.blurb}</span>}
    </button>
  )
}
