import { motion, type Variants } from 'framer-motion'
import { ArrowDown, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, stats } from '../data/content'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const termLines = [
  { k: 'firewall@simcorp:~$', v: 'show vlan brief' },
  { label: 'VLAN 2090', v: 'LAN-Clients', status: 'up' },
  { label: 'VLAN 2091', v: 'Wi-Fi 802.1X', status: 'up' },
  { label: 'VLAN 2093', v: 'Serveurs', status: 'up' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan/10 blur-3xl md:h-[28rem] md:w-[28rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-cyan-dim blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-navy-alt px-4 py-1.5 text-sm font-medium text-fg-soft"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-cyan" />
            {profile.availability}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-fg sm:text-5xl md:text-6xl"
          >
            Je sécurise et j&apos;administre
            <br />
            des infrastructures <em className="text-cyan not-italic">réseau</em>.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-fg-soft">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-4 flex items-center gap-1.5 text-base text-fg-faint">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projets"
              className="rounded-full bg-cyan px-7 py-3 text-base font-medium text-navy transition-transform hover:-translate-y-0.5 hover:bg-cyan-soft"
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-line px-7 py-3 text-base font-medium text-fg transition-colors hover:border-cyan hover:text-cyan"
            >
              Me contacter
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-semibold text-cyan">{s.value}</div>
                <div className="mt-1 text-sm text-fg-faint">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="rounded-2xl border border-line bg-navy-alt p-5 font-mono text-sm shadow-2xl shadow-cyan/5"
        >
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/30" />
          </div>
          <p className="text-fg-faint">{termLines[0].k}</p>
          <p className="mt-1 text-fg">{termLines[0].v}</p>
          <div className="mt-3 space-y-1.5">
            {termLines.slice(1).map((l) => (
              <p key={l.label}>
                <span className="text-fg-soft">{l.label} </span>
                <span className="text-cyan-soft">{l.v}</span>
                <span className="text-fg-faint"> — </span>
                <span className="text-ok">{l.status}</span>
              </p>
            ))}
          </div>
          <p className="mt-3 text-fg-faint">
            {termLines[0].k}
            <span className="animate-blink">_</span>
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-fg-faint"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
