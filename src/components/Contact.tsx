import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Send } from 'lucide-react'
import { contact, profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact depuis le portfolio — ${name || 'un visiteur'}`)
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-fg md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-fg-soft">
            {contact.body}
          </p>

          <div className="mx-auto mt-5 flex max-w-md items-center justify-center gap-2 rounded-full border border-line bg-navy-alt px-4 py-2 text-sm text-fg-soft">
            <MapPin className="h-4 w-4 shrink-0 text-cyan" />
            {contact.availabilityNote}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-3.5 text-base font-medium text-navy transition-colors hover:bg-cyan-soft"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </motion.a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-base font-medium text-fg-soft transition-colors hover:border-cyan hover:text-cyan"
            >
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-16">
          <h3 className="font-display text-xl font-medium text-fg">Un message direct</h3>
          <p className="mt-2 text-base text-fg-soft">
            Ce formulaire ouvre ton client mail avec le message pré-rempli — rien n&apos;est envoyé automatiquement.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg-soft">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-line bg-navy-alt px-4 py-2.5 text-base text-fg outline-none transition-colors focus:border-cyan"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg-soft">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-line bg-navy-alt px-4 py-2.5 text-base text-fg outline-none transition-colors focus:border-cyan"
                  placeholder="vous@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg-soft">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-line bg-navy-alt px-4 py-2.5 text-base text-fg outline-none transition-colors focus:border-cyan"
                placeholder="Parlez-moi de votre poste ou de votre entreprise..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3 text-base font-medium text-navy transition-colors hover:bg-cyan-soft"
            >
              <Send className="h-4 w-4" />
              Envoyer le message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
