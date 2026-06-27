import { useMemo, useState } from 'react'
import type { Video } from '../../data/types'
import { VideoCard } from './VideoCard'
import { VideoModal } from './VideoModal'

type VideoGalleryProps = {
  videos: Video[]
  filterable?: boolean
}

export function VideoGallery({ videos, filterable = true }: VideoGalleryProps) {
  const [active, setActive] = useState<Video | null>(null)
  const [filter, setFilter] = useState<string>('All')

  const categories = useMemo(() => {
    const set = new Set<string>()
    videos.forEach((v) => v.category && set.add(v.category))
    return ['All', ...Array.from(set)]
  }, [videos])

  const shown = filter === 'All' ? videos : videos.filter((v) => v.category === filter)

  return (
    <>
      {filterable && categories.length > 2 && (
        <div className="vfilter reveal" role="group" aria-label="Filter recipes by style">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              className={`vfilter__item ${filter === cat ? 'is-active' : ''}`}
              data-cat={cat === 'All' ? undefined : cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
              <span className="vfilter__count">
                {cat === 'All' ? videos.length : videos.filter((v) => v.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      )}

      <div className="vgrid" aria-live="polite">
        {shown.map((v, i) => (
          <VideoCard key={v.id + v.title} video={v} index={i} onPlay={setActive} />
        ))}
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </>
  )
}
