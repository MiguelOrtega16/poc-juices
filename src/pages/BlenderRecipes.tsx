import { PageHero } from '../components/PageHero'
import { RecipesView } from '../components/RecipesView'
import { CtaBand } from '../components/CtaBand'
import { BLENDER_VIDEOS } from '../data/videos'
import { SITE } from '../data/site'

export function BlenderRecipes() {
  return (
    <>
      <PageHero
        no="Hand-blended"
        eyebrow="Blender recipes"
        title={<>The full <span className="accent">cocktail</span> book.</>}
        lead="Every hand-blended build — coladas, daiquiris, margaritas, lemonades and tiki classics, all on Fresh Blendz mixes."
        orb="margarita"
        accent="var(--lime)"
      />
      <RecipesView
        videos={BLENDER_VIDEOS}
        countLabel="blender recipes"
        tipTitle="Bartender pro-tips"
        tips={[
          'Ice-to-mix ratio is everything — follow each video for the perfect texture.',
          'Use the Lemon Sour mix for Long Islands & Whiskey Sours, not just lemonade.',
          'Frozen or rocks? Margarita & Sour mixes do both — cut 1:1 with water for rocks.',
          'Garnish like the videos — guests drink with their eyes first.',
        ]}
        playlistUrl={SITE.playlists.blender}
      />
      <CtaBand
        kicker="One taste test"
        title="Make every pour"
        accentWord="repeatable."
        text="One taste test is all it takes. Set one up and experience fresh for yourself."
        label="Set Up a Taste Test"
      />
    </>
  )
}
