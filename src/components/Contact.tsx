import { Reveal } from './Reveal'
import { contactData } from '../data'

function Contact() {
  const { title, description, links } = contactData

  return (
    <section className="min-h-screen px-6 py-20" id="contact"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h2>
        <p className="mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {links.map((link, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1} as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-6"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="mb-3 text-4xl">{link.icon}</div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{link.title}</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>{link.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
