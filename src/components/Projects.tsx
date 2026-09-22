import { motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { otherWork, projects } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projets"
          title="Deux infrastructures conçues et sécurisées de bout en bout"
        />
        <Reveal delay={0.04} className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-fg-soft">
            Réalisés en maquette sur Proxmox dans le cadre du BTS SIO SISR, pour une PME
            fictive de 40 employés. Le projet 2 s&apos;appuie sur l&apos;infrastructure du projet 1.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link
                to={`/projets/${p.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-navy-alt p-7 transition-all hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-cyan-dim px-3 py-1 text-sm font-semibold text-cyan-soft">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-fg-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                </div>

                <h3 className="font-display mt-5 text-xl font-medium text-fg">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-fg-soft">{p.description}</p>

                <p className="mt-5 border-t border-line pt-4 text-base font-medium text-cyan-soft">
                  {p.result}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fg-faint transition-colors group-hover:text-cyan">
                  Voir le détail du projet
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
            Épreuve E4 — Support &amp; mise à disposition
          </span>
          <h3 className="font-display mt-2 text-2xl font-medium text-fg">
            Autres réalisations &amp; documentation
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-soft">{otherWork.intro}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {otherWork.items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-line bg-navy-alt p-6">
                <h4 className="font-display text-lg font-medium text-fg">{it.title}</h4>
                <p className="mt-2.5 text-base leading-relaxed text-fg-soft">{it.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {otherWork.docs.map((d) => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-fg-soft transition-colors hover:border-cyan hover:text-cyan"
              >
                <FileText className="h-4 w-4" />
                {d.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
