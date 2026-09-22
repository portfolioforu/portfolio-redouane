import { motion } from 'framer-motion'
import { veille } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Veille() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Veille technologique" title="Suivre l'actualité cybersécurité" />
        <Reveal delay={0.04} className="mt-6">
          <p className="text-lg leading-relaxed text-fg-soft">{veille.intro}</p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {veille.articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-line bg-navy-alt p-7"
            >
              <p className="text-sm font-medium text-fg-faint">
                {a.date} — Source : {a.source}
              </p>
              <h3 className="font-display mt-2 text-xl font-medium text-fg">{a.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-fg-soft">
                <span className="font-semibold text-cyan-soft">Le sujet : </span>
                {a.subject}
              </p>
              <p className="mt-3 text-base leading-relaxed text-fg-soft">
                <span className="font-semibold text-cyan-soft">Le problème : </span>
                {a.problem}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
