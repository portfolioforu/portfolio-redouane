import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-fg-faint sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name} — Administration &amp; Sécurité des Réseaux
        </span>
        <span>
          Portfolio créé par{' '}
          <a
            href="https://portfolio-for-u.fr"
            target="_blank"
            rel="noopener"
            className="font-medium text-cyan-soft hover:underline"
          >
            Portfolio For U
          </a>{' '}
          — formule Clé en main.
        </span>
      </div>
    </footer>
  )
}
