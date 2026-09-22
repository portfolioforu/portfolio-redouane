import { motion } from 'framer-motion'
import { experience, experienceIntro, interests, languages } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Parcours() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Parcours" title="Formation, alternance et expériences" />

        <Reveal delay={0.04} className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-fg-soft">{experienceIntro}</p>
        </Reveal>

        <div className="relative mt-14 space-y-10 border-l border-line pl-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: 'easeOut' }}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-cyan bg-navy" />
              <span className="text-sm font-semibold uppercase tracking-wide text-cyan">
                {e.period}
              </span>
              <h3 className="font-display mt-1.5 text-xl font-medium text-fg">{e.title}</h3>
              <p className="mt-0.5 text-base font-medium text-fg-faint">{e.org}</p>
              <p className="mt-2.5 text-base leading-relaxed text-fg-soft">{e.description}</p>
              {e.skillsGained && (
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {e.skillsGained.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-cyan-dim bg-cyan-dim px-3 py-1 text-sm font-medium text-cyan-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.08} className="mt-16">
          <h3 className="font-display text-xl font-medium text-fg">Langues</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {languages.map((l) => (
              <div key={l.label} className="rounded-2xl border border-line bg-navy-alt p-5">
                <span className="text-2xl">{l.flag}</span>
                <p className="mt-3 text-base font-medium text-fg">{l.label}</p>
                <p className="mt-1 text-sm text-fg-faint">{l.level}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <h3 className="font-display text-xl font-medium text-fg">En dehors du réseau</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {interests.map((it) => (
              <div key={it.title} className="rounded-2xl border border-line bg-navy-alt p-6">
                <span className="text-2xl">{it.icon}</span>
                <h4 className="font-display mt-3 text-lg font-medium text-fg">{it.title}</h4>
                <p className="mt-1 text-sm font-medium text-cyan-soft">{it.subtitle}</p>
                <p className="mt-2.5 text-base leading-relaxed text-fg-soft">{it.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
