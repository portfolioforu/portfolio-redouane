import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string
  title: string
  center?: boolean
}) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
