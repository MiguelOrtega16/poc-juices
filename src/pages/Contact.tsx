import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { Icon } from '../components/Icon'
import type { IconName } from '../components/Icon'
import { SITE } from '../data/site'

const REASONS: { icon: IconName; t: string; d: string }[] = [
  { icon: 'truck', t: 'Find your distributor', d: 'We deliver across Hawaii, the U.S. mainland & the Caribbean.' },
  { icon: 'martini', t: 'Set up a taste test', d: 'One taste is all it takes — see the difference for yourself.' },
  { icon: 'ruler', t: 'Plan an equipment program', d: 'New build or existing bar — we design it with you.' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        no="Lead"
        eyebrow="Lead with us"
        title={<>Let’s talk <span className="accent">fresh</span>.</>}
        lead="Distribution, taste tests, equipment programs — tell us what you’re building and we’ll get back to you."
        orb="margarita"
        accent="var(--lime)"
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <aside className="contact-aside reveal">
              <h2 className="sec-head__title">How can we help?</h2>
              <p className="lead">Send us a note and the right person on our team will follow up.</p>
              <div className="contact-list">
                {REASONS.map((r) => (
                  <div className="contact-item" key={r.t}>
                    <span className="contact-item__ic"><Icon name={r.icon} size={20} /></span>
                    <span>
                      <strong>{r.t}</strong>
                      <span>{r.d}</span>
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '1.6rem', fontSize: '0.92rem', color: 'var(--ink-3)' }}>
                Serving {SITE.serving}. Prefer to browse first? Watch the{' '}
                <a href={SITE.playlists.channel} target="_blank" rel="noreferrer" className="link-arrow" style={{ ['--accent-color' as string]: 'var(--ocean)' } as React.CSSProperties}>
                  recipe videos
                </a>.
              </p>
            </aside>

            <div className="contact-card reveal" data-delay="1">
              {sent ? (
                <div style={{ display: 'grid', gap: '1.1rem', placeItems: 'start' }}>
                  <div className="form__success">
                    <Icon name="sparkle" size={20} />
                    Thank you for your response.
                  </div>
                  <p>We’ve received your message and will be in touch shortly.</p>
                  <button className="btn btn--ghost" onClick={() => setSent(false)}>Send another message</button>
                </div>
              ) : (
                <form className="form" onSubmit={onSubmit}>
                  <div className="form__row">
                    <div className="field">
                      <label htmlFor="first">First Name <span className="req">*</span></label>
                      <input id="first" name="first" type="text" required placeholder="Jane" />
                    </div>
                    <div className="field">
                      <label htmlFor="last">Last Name</label>
                      <input id="last" name="last" type="text" placeholder="Rivera" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email <span className="req">*</span></label>
                    <input id="email" name="email" type="email" required placeholder="jane@yourvenue.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="venue">Venue / Property</label>
                    <input id="venue" name="venue" type="text" placeholder="Beachside Resort & Bar" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message <span className="req">*</span></label>
                    <textarea id="message" name="message" required placeholder="Tell us about your bar, your volume, and what you'd like to pour…" />
                  </div>
                  <p className="form__note">
                    By submitting this form, you agree to our processing of your data in accordance with our Privacy Policy.
                  </p>
                  <button className="btn btn--lg btn--block" type="submit">
                    Send Message
                    <Icon name="arrowUp" size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
