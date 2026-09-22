import { motion } from 'framer-motion'
import { ArrowLeft, Check, FileText } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/content'
import Reveal from './Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/projets" replace />
  }

  const otherProject = projects.find((p) => p.slug !== slug)

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            to="/projets"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-faint transition-colors hover:text-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>

          <span className="mt-6 inline-block rounded-full bg-cyan-dim px-3 py-1 text-sm font-semibold text-cyan-soft">
            {project.tag}
          </span>

          <h1 className="font-display mt-4 text-3xl font-medium tracking-tight text-fg md:text-4xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-base text-fg-faint">
            <span>{project.client}</span>
            <span>{project.role}</span>
            <span>{project.duration}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 grid gap-4 sm:grid-cols-3">
          {project.results.map((r) => (
            <div key={r.label} className="rounded-2xl border border-line bg-navy-alt p-5">
              <div className="font-display text-3xl font-semibold text-cyan">{r.value}</div>
              <div className="mt-1 text-base text-fg-soft">{r.label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <h2 className="font-display text-2xl font-medium text-fg">Contexte</h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-soft">{project.context}</p>
        </Reveal>

        {project.problems && (
          <Reveal delay={0.1} className="mt-12">
            <h2 className="font-display text-2xl font-medium text-fg">Avant le projet</h2>
            <ul className="mt-4 space-y-3">
              {project.problems.map((pb) => (
                <li key={pb} className="flex items-start gap-3 text-lg leading-relaxed text-fg-soft">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fg-faint" />
                  {pb}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={0.12} className="mt-12">
          <h2 className="font-display text-2xl font-medium text-fg">Objectifs</h2>
          <ul className="mt-4 space-y-3">
            {project.objectives.map((o) => (
              <li key={o} className="flex items-start gap-3 text-lg leading-relaxed text-fg-soft">
                <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                {o}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.14} className="mt-14">
          <h2 className="font-display text-2xl font-medium text-fg">Architecture technique</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.infraCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-line bg-navy-alt p-5">
                <h4 className="font-display text-base font-medium text-fg">{card.title}</h4>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm leading-relaxed text-fg-soft">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <h2 className="font-display text-2xl font-medium text-fg">Ce que j&apos;ai fait</h2>
          <ul className="mt-4 space-y-3">
            {project.actions.map((a) => (
              <li key={a} className="flex items-start gap-3 text-lg leading-relaxed text-fg-soft">
                <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        {project.flowSteps && (
          <Reveal delay={0.16} className="mt-14">
            <h2 className="font-display text-2xl font-medium text-fg">
              Flux d&apos;authentification 802.1X
            </h2>
            <ol className="mt-5 space-y-3">
              {project.flowSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 text-lg leading-relaxed text-fg-soft">
                  <span className="font-mono mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-dim text-sm font-semibold text-cyan-soft">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            {project.flowNote && (
              <p className="mt-4 text-base leading-relaxed text-fg-faint">{project.flowNote}</p>
            )}
          </Reveal>
        )}

        <Reveal delay={0.17} className="mt-14">
          <h2 className="font-display text-2xl font-medium text-fg">Plan d&apos;adressage</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy-alt text-fg-faint">
                  <th className="px-4 py-3 font-semibold">VLAN</th>
                  <th className="px-4 py-3 font-semibold">Nom</th>
                  <th className="px-4 py-3 font-semibold">Réseau</th>
                  <th className="px-4 py-3 font-semibold">Passerelle</th>
                  <th className="px-4 py-3 font-semibold">Usage</th>
                </tr>
              </thead>
              <tbody>
                {project.addressing.map((row) => (
                  <tr key={row.vlan + row.name} className="border-t border-line">
                    <td className="font-mono px-4 py-3 text-cyan-soft">{row.vlan}</td>
                    <td className="px-4 py-3 font-medium text-fg">{row.name}</td>
                    <td className="font-mono px-4 py-3 text-fg-soft">{row.network}</td>
                    <td className="font-mono px-4 py-3 text-fg-soft">{row.gateway}</td>
                    <td className="px-4 py-3 text-fg-soft">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-14">
          <h2 className="font-display text-2xl font-medium text-fg">Outils utilisés</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-cyan-dim bg-cyan-dim px-3 py-1.5 text-sm font-medium text-cyan-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.19} className="mt-14">
          <h2 className="font-display text-2xl font-medium text-fg">Ce que j&apos;en retiens</h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-soft">{project.learned}</p>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <a
            href={project.docLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-base font-medium text-fg-soft transition-colors hover:border-cyan hover:text-cyan"
          >
            <FileText className="h-4 w-4" />
            {project.docLabel}
          </a>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          {otherProject ? (
            <Link
              to={`/projets/${otherProject.slug}`}
              className="inline-flex items-center gap-1.5 text-base font-medium text-fg-soft transition-colors hover:text-cyan"
            >
              <ArrowLeft className="h-4 w-4" />
              Voir l&apos;autre projet
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/contact"
            className="rounded-full bg-cyan px-7 py-3 text-base font-medium text-navy transition-transform hover:-translate-y-0.5 hover:bg-cyan-soft"
          >
            Discuter d&apos;un projet similaire
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
