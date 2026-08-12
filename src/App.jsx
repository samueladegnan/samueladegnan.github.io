import { useEffect, useRef, useState } from 'react'
import profilePic from './assets/headshot.jpg'

const projects = [
  {
    number: '01',
    featured: true,
    category: 'Privacy engineering',
    title: 'Zero-Knowledge Fitness Platform',
    summary: 'Browser-first fitness tracking with client-owned workout data and keys.',
    notes: [
      ['Build', 'IndexedDB, encrypted sync, ML-DSA login, ML-KEM key encapsulation, and Groth16.'],
      ['Boundary', 'The proof covers the workout summary and payload binding, not encryption.'],
    ],
    stack: ['Vanilla JavaScript', 'PWA', 'IndexedDB', 'Web Crypto API', 'Argon2id', 'HKDF', 'AES-256-GCM', 'ML-KEM-768', 'ML-DSA-65', 'Circom', 'Groth16', 'Poseidon', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://samueladegnan.github.io/zk-fitness-platform/',
    repo: 'https://github.com/samueladegnan/zk-fitness-platform',
    tone: 'coral',
    proofLabel: 'Stack',
    proof: 'Vanilla JavaScript, Web Crypto, Circom, Poseidon, Node, Express, and PostgreSQL.',
  },
  {
    number: '02',
    category: 'Multi-cloud operations',
    title: 'SEEO Multi-Cloud Orchestrator',
    summary: 'Short-lived environment control across AWS, Azure, Google Cloud, and OCI.',
    notes: [
      ['Build', 'Rails, React, provider adapters, RBAC, OPA, Terraform, and TTL cleanup.'],
      ['Scope', 'Demo uses mock mode with no cloud credentials or billable resources.'],
    ],
    stack: ['Ruby on Rails', 'React', 'AWS', 'Azure', 'Google Cloud', 'OCI', 'Terraform', 'OPA/Rego'],
    link: 'https://samueladegnan.github.io/seeo-aws-orchestrator/',
    repo: 'https://github.com/samueladegnan/seeo-aws-orchestrator',
    tone: 'blue',
    proof: 'Mock mode, Terraform, persisted state, retries, and CI security artifacts.',
  },
  {
    number: '03',
    category: 'Developer tooling',
    title: 'AI CI/CD Security Guardrail',
    summary: 'Python CLI and GitHub Action for reviewable security findings in CI.',
    notes: [
      ['Build', 'Parses SARIF, SonarQube, and cppcheck with context, mapping, and OPA gates.'],
      ['Scope', 'A triage layer, not a SAST replacement or security guarantee.'],
    ],
    stack: ['Python', 'GitHub Actions', 'SARIF', 'OPA/Rego', 'Docker', 'SQLite'],
    link: 'https://samueladegnan.github.io/ai-cicd-security-guardrail/',
    repo: 'https://github.com/samueladegnan/ai-cicd-security-guardrail',
    tone: 'green',
    proof: 'Fixtures, browser demo, mock provider, SARIF output, and CI checks.',
  },
]

const skillGroups = [
  { label: 'Languages and application code', items: ['C/C++', 'Python', 'Ruby on Rails', 'JavaScript', 'React', 'Node.js', 'SQL', 'Bash'] },
  { label: 'Security and trust boundaries', items: ['AES-256-GCM', 'Argon2id', 'HKDF', 'ML-KEM-768', 'ML-DSA-65', 'Web Crypto API', 'Circom', 'Groth16', 'Poseidon', 'OPA/Rego', 'IAM'] },
  { label: 'Cloud and delivery', items: ['AWS', 'Azure', 'Google Cloud', 'OCI', 'Terraform', 'Docker', 'GitHub Actions', 'Jenkins'] },
  { label: 'Embedded and build systems', items: ['RTOS', 'STM32', 'BeagleBone', 'JTAG', 'I2C/SPI', 'UART', 'CMake', 'Conan'] },
]

const contactItems = [
  { href: 'mailto:samueladegnan@gmail.com', label: 'Email Sam Degnan', text: 'Email', external: false },
  { href: 'https://linkedin.com/in/sam-degnan/', label: 'Open Sam Degnan on LinkedIn', text: 'LinkedIn', external: true },
  { href: 'https://github.com/samueladegnan', label: 'Open Sam Degnan on GitHub', text: 'GitHub', external: true },
  { href: '/Sam-Degnan-Resume.pdf', label: 'Download Sam Degnan resume', text: 'Resume', external: false, download: true },
]

function ArrowIcon({ className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>
}

function ExternalIcon({ className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
}

function MoonIcon({ className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" /></svg>
}

function SunIcon({ className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
}

function MenuIcon({ className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
}

function CloseIcon({ className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
}

function getInitialTheme() {
  if (typeof window === 'undefined') return false

  try {
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme) return storedTheme === 'dark'
  } catch {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

function ContactLinks({ mobile = false, onNavigate, isOpen = true }) {
  return (
    <div className={mobile ? 'mobile-contact-links' : 'contact-links'}>
      {contactItems.map((item) => (
        <a key={item.text} href={item.href} download={item.download ? 'Sam-Degnan-Resume.pdf' : undefined} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} onClick={onNavigate} aria-label={`${item.label}${item.external ? ', opens in a new tab' : ''}`} tabIndex={mobile && !isOpen ? -1 : undefined}>
          {item.text}
          {item.external && <ExternalIcon className="icon-xs" />}
        </a>
      ))}
    </div>
  )
}

function SectionIntro({ id, label, title, description }) {
  return (
    <div className="section-intro">
      <p className="section-label">{label}</p>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ProjectCard({ project }) {
  return (    <article className={`project-card project-card-${project.tone} ${project.featured ? 'project-card-featured' : ''}`}>
      <div className="project-card-heading">
        <div className="project-index"><span>{project.number}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
      </div>
      <div className="project-notes">
        {project.notes.map(([label, text]) => <div className="project-note" key={label}><span>{label}</span><p>{text}</p></div>)}
      </div>
      <p className="project-proof"><span>{project.proofLabel || 'Evidence'}</span>{project.proof}</p>
      <div className="project-card-footer">
        <div className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <div className="project-links">
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Read ${project.title} project page, opens in a new tab`}>
            View project <ExternalIcon className="icon-sm" />
          </a>
          <a className="project-source-link" href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub, opens in a new tab`}>
            Source <ExternalIcon className="icon-xs" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [isDark, setIsDark] = useState(getInitialTheme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const wasMenuOpen = useRef(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#151719' : '#f7f4ed')
    try {
      window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      // Theme preference is optional when storage is unavailable
    }
  }, [isDark])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (!isMenuOpen && wasMenuOpen.current) menuButtonRef.current?.focus()
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    wasMenuOpen.current = isMenuOpen
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 701px)')
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }
    desktopQuery.addEventListener?.('change', closeMenuOnDesktop)
    return () => desktopQuery.removeEventListener?.('change', closeMenuOnDesktop)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#about" onClick={closeMenu} aria-label="Sam Degnan home">Sam Degnan<span className="wordmark-dot" aria-hidden="true" /></a>
          <nav className="desktop-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a></nav>
          <div className="header-actions">
            <div className="desktop-contact"><ContactLinks /></div>
            <button className="theme-toggle" type="button" onClick={() => setIsDark((value) => !value)} aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}>{isDark ? <SunIcon className="icon-sm" /> : <MoonIcon className="icon-sm" />}</button>
            <button ref={menuButtonRef} className="menu-toggle" type="button" onClick={() => setIsMenuOpen((value) => !value)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}>{isMenuOpen ? <CloseIcon className="icon-sm" /> : <MenuIcon className="icon-sm" />}</button>
          </div>
        </div>
        <div id="mobile-navigation" className={`mobile-navigation ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
          <nav aria-label="Mobile navigation"><a href="#work" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Work</a><a href="#experience" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Experience</a><a href="#skills" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Skills</a></nav>
          <ContactLinks mobile isOpen={isMenuOpen} onNavigate={closeMenu} />
        </div>
      </header>

      <main id="main-content">
        <section id="about" className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Software engineer focused on secure systems</p>
            <h1 id="hero-heading">I build privacy boundaries, cloud control planes, and reliable delivery tools.</h1>
            <p className="hero-lede">Sam Degnan is a software engineer working across cryptography, multi-cloud infrastructure, embedded systems, and developer tooling.</p>
            <p className="hero-supporting">This is Sam Degnan's GitHub Pages portfolio, with independent projects that make the trust boundary, operational model, and limits of each system visible.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore the work <ArrowIcon className="icon-sm" /></a><a className="button button-secondary" href="/Sam-Degnan-Resume.pdf" download="Sam-Degnan-Resume.pdf">Download résumé <ArrowIcon className="icon-sm" /></a><a className="button button-tertiary" href="https://github.com/samueladegnan" target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Degnan on GitHub, opens in a new tab">GitHub <ExternalIcon className="icon-sm" /></a></div>
          </div>
          <aside className="profile-panel" aria-label="Profile summary">
            <div className="profile-image-frame"><div className="profile-accent-shape" aria-hidden="true" /><img src={profilePic} alt="Sam Degnan" className="profile-image" width="420" height="520" /></div>
            <div className="profile-caption"><p>Currently</p><strong>Software Engineer I</strong><span>Motorola Solutions</span><div><span>United States</span><span>Iowa State, B.S.</span></div></div>
          </aside>
        </section>

        <section className="principles-strip" aria-label="Engineering focus"><p>The common thread across the work</p><span>Privacy boundaries</span><span>Cloud lifecycle</span><span>Reliable delivery</span></section>

        <section id="work" className="content-section work-section" aria-labelledby="work-heading"><SectionIntro id="work-heading" label="Selected work" title="Three projects I can explain end to end" description="Three GitHub projects across privacy, multi-cloud operations, and CI security." /><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.number} />)}</div></section>

        <section id="experience" className="content-section experience-section" aria-labelledby="experience-heading"><SectionIntro id="experience-heading" label="Experience" title="Engineering close to the product" description="Secure product work for first-responder communications, from cryptography to release." /><div className="experience-layout"><div className="experience-intro"><p className="experience-period">June 2023 to present</p><h3>Software Engineer I</h3><p className="experience-company">Motorola Solutions</p></div><div className="experience-points"><div><span>01</span><p>Built secure cloud infrastructure and cryptographic software for systems where reliability and confidentiality matter.</p></div><div><span>02</span><p>Improved development workflows with AI-assisted tooling while keeping human review, testing, and security analysis in the loop.</p></div><div><span>03</span><p>Worked across Docker, Jenkins, Bitbucket CI, SonarQube, Klocwork, embedded firmware, and Conan release workflows.</p></div><div><span>04</span><p>Served as a Cyber Security Champion and helped new engineers become productive on a complex codebase.</p></div></div></div></section>

        <section id="skills" className="content-section skills-section" aria-labelledby="skills-heading"><SectionIntro id="skills-heading" label="Toolkit" title="Tools I use to make the system hold up" description="Languages, cryptography, cloud, embedded, and delivery tools used across the work." /><div className="skills-grid">{skillGroups.map((group) => <div className="skill-card" key={group.label}><h3>{group.label}</h3><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div></section>

        <section className="closing-section" aria-labelledby="closing-heading"><p className="section-label">Contact</p><h2 id="closing-heading">Let’s build something that holds up.</h2><p>I am interested in roles involving secure products, multi-cloud infrastructure, embedded software, and developer platforms where careful engineering has a visible effect.</p><a className="button button-primary" href="mailto:samueladegnan@gmail.com">Email Sam <ArrowIcon className="icon-sm" /></a></section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Sam Degnan</span><p>Software engineer portfolio on GitHub Pages</p><div><a href="/Sam-Degnan-Resume.pdf" download="Sam-Degnan-Resume.pdf">Résumé <ArrowIcon className="icon-xs" /></a><a href="https://github.com/samueladegnan" target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Degnan on GitHub, opens in a new tab">GitHub <ExternalIcon className="icon-xs" /></a><a href="#about">Back to top <ArrowIcon className="icon-xs footer-arrow" /></a></div></footer>
    </div>
  )
}
