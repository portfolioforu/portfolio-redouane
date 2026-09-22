import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { referentiel, skills } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Competences() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Compétences" title="Ce que je sais mettre en œuvre" />
        <Reveal delay={0.04} className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-fg-soft">
            Des compétences construites en formation et confirmées en alternance, couvrant la
            conception réseau, l&apos;administration système et la sécurisation des accès.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-line bg-navy-alt p-6"
            >
              <h3 className="font-display text-lg font-medium text-fg">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-dim bg-cyan-dim px-3 py-1.5 text-sm font-medium text-cyan-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
            Référentiel BTS SIO SISR
          </span>
          <h3 className="font-display mt-2 text-2xl font-medium text-fg">
            Compétences validées par épreuve
          </h3>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy-alt text-fg-faint">
                  <th className="px-5 py-3.5 font-semibold">Épreuve</th>
                  <th className="px-5 py-3.5 font-semibold">Ce qu&apos;elle valide</th>
                  <th className="px-5 py-3.5 font-semibold">Mise en œuvre</th>
                </tr>
              </thead>
              <tbody>
                {referentiel.map((r) => (
                  <tr key={r.epreuve} className="border-t border-line">
                    <td className="px-5 py-4 font-medium text-fg">{r.epreuve}</td>
                    <td className="px-5 py-4 text-fg-soft">{r.valide}</td>
                    <td className="px-5 py-4 text-fg-soft">{r.projets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            to="/projets"
            className="mt-5 inline-flex items-center gap-1 text-base font-medium text-cyan-soft transition-colors hover:text-cyan"
          >
            Voir le détail des projets
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
