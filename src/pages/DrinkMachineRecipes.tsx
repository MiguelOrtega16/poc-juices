import { PageHero } from '../components/PageHero'
import { RecipesView } from '../components/RecipesView'
import { CtaBand } from '../components/CtaBand'
import { DRINK_MACHINE_VIDEOS } from '../data/videos'
import { SITE } from '../data/site'

export function DrinkMachineRecipes() {
  return (
    <>
      <PageHero
        no="Taylor"
        eyebrow="Drink machine recipes"
        title={<>Frozen, on <span className="accent">tap</span>.</>}
        lead="Coladas, daiquiris, margaritas and lemonades built straight from the Taylor machine — high volume, perfect consistency, zero guesswork."
        orb="pina"
        accent="var(--pineapple)"
      />
      <RecipesView
        videos={DRINK_MACHINE_VIDEOS}
        countLabel="machine recipes"
        tipTitle="Get the most from your machine"
        tips={[
          'Keep hoppers below 41°F — Fresh Blendz mixes are fresh and perishable.',
          'Dial in viscosity for a scoopable, photogenic pour.',
          'Layer a Miami Vice straight from two cylinders for a showstopper.',
          'Pre-batch with our batch recipes for peak-hour speed.',
        ]}
        playlistUrl={SITE.playlists.drinkMachine}
      />
      <CtaBand
        kicker="Build the program"
        title="Want this lineup behind"
        accentWord="your bar?"
        text="We'll help you pick the right Taylor machines, mixes and menu for your volume — then build it with you."
        to="/equipment-programs"
        label="Explore Equipment Programs"
      />
    </>
  )
}
