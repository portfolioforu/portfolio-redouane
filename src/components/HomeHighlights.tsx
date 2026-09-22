import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects, skills } from '../data/content'
import Reveal from './Reveal'

const featured = projects.slice(0, 2)

export default function HomeHighlights() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
              Compétences
            </span>
            <h2 className="font-display mt-2 text-2xl font-medium tracking-tight text-fg md:text-3xl">
              Ce que je sais mettre en œuvre
            </h2>
          </div>
          <Link
            to="/competences"
            className="hidden shrink-0 items-center gap-1 text-base font-medium text-fg-soft transition-colors hover:text-cyan sm:inline-flex"
          >
            Tout voir
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.06} className="mt-6 flex flex-wrap gap-2">
          {skills.flatMap((g) => g.items).slice(0, 9).map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-dim bg-cyan-dim px-3 py-1.5 text-sm font-medium text-cyan-soft"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-16 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
              Projets récents
            </span>
            <h2 className="font-display mt-2 text-2xl font-medium tracking-tight text-fg md:text-3xl">
              Deux infrastructures en un coup d&apos;œil
            </h2>
          </div>
          <Link
            to="/projets"
            className="hidden shrink-0 items-center gap-1 text-base font-medium text-fg-soft transition-colors hover:text-cyan sm:inline-flex"
          >
            Tout voir
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link
                to={`/projets/${p.slug}`}
                className="group block h-full rounded-2xl border border-line bg-navy-alt p-7 transition-all hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/5"
              >
                <span className="rounded-full bg-cyan-dim px-3 py-1 text-sm font-semibold text-cyan-soft">
                  {p.tag}
                </span>
                <h3 className="font-display mt-4 text-xl font-medium text-fg">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-fg-soft">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fg-faint transition-colors group-hover:text-cyan">
                  Voir le détail
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center sm:hidden">
          <Link
            to="/projets"
            className="inline-flex items-center gap-1 text-base font-medium text-fg-soft transition-colors hover:text-cyan"
          >
            Tous les projets
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
