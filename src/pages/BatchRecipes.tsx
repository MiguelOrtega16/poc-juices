import { PageHero } from '../components/PageHero'
import { RecipesView } from '../components/RecipesView'
import { CtaBand } from '../components/CtaBand'
import { BATCH_VIDEOS } from '../data/videos'

export function BatchRecipes() {
  return (
    <>
      <PageHero
        no="Pre-batch"
        eyebrow="Batch recipes"
        title={<>Built for the <span className="accent">rush</span>.</>}
        lead="Pre-batch your best-sellers ahead of the crowd. Big-format builds for piña colada, strawberry daiquiri, margarita and lemonade — ready to pour when it counts."
        orb="strawberry"
        accent="var(--guava)"
      />
      <RecipesView
        videos={BATCH_VIDEOS}
        countLabel="batch recipes"
        tipTitle="Why batch?"
        tips={[
          'Cut peak-hour ticket times by prepping the crowd-pleasers in advance.',
          'Lock in identical flavor across every server and shift.',
          'Pair batches with high-volume machines for maximum throughput.',
          'Keep batches cold (below 41°F) — they are fresh, not shelf-stable.',
        ]}
        filterable={false}
      />
      <CtaBand
        kicker="Scale up"
        title="Scale your bar"
        accentWord="program."
        text="From a single machine to a full resort build-out, we design programs that keep up with your busiest nights."
        to="/equipment-programs"
        label="See Equipment Programs"
      />
    </>
  )
}
