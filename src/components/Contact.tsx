import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { contactData } from '../data'

function Contact() {
  const [ref, isVisible] = useScrollAnimation()
  const { title, description, links } = contactData

  const delayClasses = [
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className={`min-h-screen px-6 py-20 animate-on-scroll ${
        isVisible ? 'visible' : ''
      }`}
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h2>
        <p className="mb-12 text-lg" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-xl p-6 transition-transform hover:scale-105 animate-on-scroll ${delayClasses[index]}`}
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div className="mb-3 text-4xl">{link.icon}</div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{link.title}</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact