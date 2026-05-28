import { motion } from 'framer-motion'
import { contactData } from '../data'

function Contact() {
  const { title, description, links } = contactData

  return (
    <section className="min-h-screen px-6 py-20" id="contact"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{title}</h2>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
        </div>

        <div className="space-y-6">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 rounded-xl p-6 transition-shadow duration-200 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--bg-card)',
                marginLeft: index % 2 === 0 ? '0' : '4rem',
                marginRight: index % 2 === 0 ? '4rem' : '0',
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <span className="text-3xl flex-shrink-0 transition-transform duration-200 hover:scale-110">
                {link.icon}
              </span>
              <div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{link.title}</h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
