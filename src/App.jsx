import React, { useEffect, useRef, useState } from 'react';
import profilePic from './assets/headshot.jpg';

/**
 * Icon components
 * All icons are purely decorative and therefore set aria-hidden="true".
 */
const MoonIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

const SunIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const ExternalLinkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const projects = [
  {
    title: 'Zero-Knowledge Fitness Platform',
    tech: 'Vanilla JavaScript, Web Crypto API, Argon2id, ML-KEM/ML-DSA, Node.js, Express, PostgreSQL, PWA',
    overview:
      'A privacy-first workout tracker that encrypts every log client-side with AES-256-GCM before it reaches the server. ML-DSA-65 authenticates users, ML-KEM-768 wraps per-sync keys, and the app works offline as an installable PWA.',
    value:
      'Demonstrates production cryptography, zero-trust architecture, and a buildless SPA whose CI pipeline is triaged by the same AI guardrail used across the portfolio.',
    link: 'https://samueladegnan.github.io/zk-fitness-platform/',
  },
  {
    title: 'Secure Ephemeral Environment Orchestrator (SEEO)',
    tech: 'Ruby 3.3, Rails 7, AWS SDK, Terraform, React, Docker, GitHub Actions',
    overview:
      'A full-stack DevOps tool for spinning up secure, TTL-bound AWS infrastructure on demand. A Rails API enforces RBAC and OPA policies, a React dashboard streams real-time state, and a reusable CI guardrail triages Brakeman findings on every push.',
    value:
      'Shows end-to-end cloud architecture, policy-as-code, real-time UI design, and the discipline of shipping a security guardrail as a reusable cross-repo action.',
    link: 'https://samueladegnan.github.io/seeo-aws-orchestrator/',
  },
  {
    title: 'AI-Driven CI/CD Security Guardrail',
    tech: 'Python, GitHub Actions, Docker, SARIF, OpenAI/Anthropic/Gemini, OPA/Rego',
    overview:
      'A reusable GitHub Action and Docker image that parses static-analysis reports (SARIF, SonarQube, cppcheck), enriches findings with compliance context, and uses an LLM to separate real risks from false positives.',
    value:
      'Highlights secure-coding discipline, DevOps tooling, and pragmatic AI integration. It now runs in the CI pipelines of SEEO and ZK Fitness, triaging Brakeman and ESLint findings before they reach production.',
    link: 'https://samueladegnan.github.io/ai-cicd-security-guardrail/',
  },
];

const skills = [
  {
    category: 'Application Security & Cryptography',
    items: 'Zero-Knowledge / Zero-Trust Architecture, Post-Quantum Cryptography (ML-KEM/ML-DSA), AES-256-GCM, Argon2id, Web Crypto API, OPA/Rego, Key Management, Code Signing',
  },
  {
    category: 'Cloud Architecture & Infrastructure',
    items: 'AWS (EC2, EBS, Secrets Manager, IAM, DynamoDB), Terraform, Docker, Linux/UNIX, PostgreSQL',
  },
  {
    category: 'AI Integration & Automation',
    items: 'LLM Tooling (OpenAI/Anthropic/Gemini), AI-Driven Static Analysis, Prompt Engineering, Output Validation',
  },
  {
    category: 'Core Systems & Languages',
    items: 'C/C++, Python, Ruby on Rails, Java, JavaScript (Node.js, React, PWA), Bash, SQL',
  },
  {
    category: 'DevOps & Build Engineering',
    items: 'GitHub Actions, Jenkins, Bitbucket CI, Azure DevOps, GitLab, CMake, Conan, SonarQube, Klocwork, SARIF, cppcheck',
  },
  {
    category: 'Embedded Systems',
    items: 'RTOS, STM32 V8, BeagleBone, Lauterbach JTAG, I2C/SPI, UART',
  },
];

const contactItems = [
  {
    href: 'mailto:samueladegnan@gmail.com',
    label: 'Send email to samueladegnan@gmail.com',
    short: 'Email',
    full: 'samueladegnan@gmail.com',
    icon: '✉️',
  },
  {
    href: 'https://linkedin.com/in/sam-degnan/',
    label: 'Visit LinkedIn profile (opens in new tab)',
    short: 'LinkedIn',
    full: 'linkedin.com/in/sam-degnan',
    icon: '💼',
    external: true,
  },
  {
    href: 'https://github.com/samueladegnan',
    label: 'Visit GitHub profile (opens in new tab)',
    short: 'GitHub',
    full: 'github.com/samueladegnan',
    icon: '💻',
    external: true,
  },
];

const ContactLink = ({ item, onClick, className = '', ...rest }) => (
  <a
    href={item.href}
    target={item.external ? '_blank' : undefined}
    rel={item.external ? 'noopener noreferrer' : undefined}
    onClick={onClick}
    className={`flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 rounded-sm transition-colors ${className}`}
    aria-label={item.label}
    {...rest}
  >
    <span className="text-xl" aria-hidden="true">{item.icon}</span>
    <span className="md:hidden lg:inline text-sm">{item.full}</span>
    <span className="hidden md:inline lg:hidden text-sm">{item.short}</span>
  </a>
);

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const wasMenuOpen = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e) => {
      const isInsideMenu = menuRef.current?.contains(e.target);
      const isHamburger = hamburgerRef.current?.contains(e.target);
      if (!isInsideMenu && !isHamburger) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
    if (!isMenuOpen && wasMenuOpen.current && hamburgerRef.current) {
      hamburgerRef.current.focus();
    }
    wasMenuOpen.current = isMenuOpen;
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300 font-sans selection:bg-cyan-200 selection:text-cyan-900 dark:selection:bg-cyan-900 dark:selection:text-cyan-50 print:bg-white print:text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-cyan-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Skip to main content
      </a>

      <header className="bg-white/85 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 py-3 md:py-5 px-4 sm:px-12 lg:px-24 backdrop-blur-md sticky top-0 z-40 print:static print:bg-white print:text-slate-900 shadow-sm dark:shadow-none">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight truncate">
                Sam Degnan
              </h1>
              <p className="hidden md:block text-sm lg:text-base text-cyan-700 dark:text-cyan-400 mt-1 font-medium tracking-wide truncate">
                Software Engineer | Mission-Critical Systems & AI Integration
              </p>
              <p className="md:hidden text-xs text-cyan-700 dark:text-cyan-400 mt-0.5 font-medium tracking-wide truncate">
                Software Engineer
              </p>
            </div>

            <div className="hidden md:flex items-center gap-4 shrink-0">
              <nav
                aria-label="Contact links"
                className="flex flex-col items-start gap-1 text-sm font-medium"
              >
                {contactItems.map((item) => (
                  <ContactLink key={item.short} item={item} className="py-0.5" />
                ))}
              </nav>
              <div
                className="hidden lg:block h-8 w-px bg-slate-300 dark:bg-slate-700"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                {isDark ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
              <button
                ref={hamburgerRef}
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-3 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                {isMenuOpen ? (
                  <XIcon className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div
            id="mobile-menu"
            ref={menuRef}
            aria-hidden={!isMenuOpen}
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav
              aria-label="Contact links mobile"
              className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 font-medium"
            >
              {contactItems.map((item) => (
                <ContactLink
                  key={item.short}
                  item={item}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 text-base"
                  tabIndex={isMenuOpen ? 0 : -1}
                />
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main
        id="main-content"
        className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-12 md:py-16 space-y-16 md:space-y-20"
      >
        <section
          aria-labelledby="about-heading"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12"
        >
          <div className="flex-1 w-full text-center md:text-left">
            <h2
              id="about-heading"
              className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 text-left"
            >
              About Me
            </h2>
            <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl text-left text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Software Engineer (B.S. from Iowa State) building cryptographic
                software for first-responder communications at Motorola
                Solutions.
              </p>
              <p>
                I use AI-assisted development to architect secure AWS
                infrastructure and embedded firmware, compressing delivery
                cycles from months to days while maintaining mission-critical
                security standards.
              </p>
              <p className="pt-2 text-slate-900 dark:text-slate-200 font-medium">
                Relocating to Austin, TX and actively seeking new engineering
                opportunities.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center mt-4 md:mt-12 w-full md:w-auto mb-8 md:mb-0">
            <div className="relative">
              <div
                className="absolute inset-0 bg-cyan-200 dark:bg-cyan-900/20 rounded-full scale-110 -z-10 blur-md motion-reduce:blur-none"
                aria-hidden="true"
              />
              <img
                src={profilePic}
                alt="Sam Degnan headshot"
                className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl border-4 border-slate-200 dark:border-slate-800"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="relative bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-600 hover:shadow-xl transition-all shadow-lg group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} (opens in new tab)`}
                  className="absolute top-6 right-6 md:top-8 md:right-8 p-2 -m-2 text-slate-500 hover:text-cyan-700 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:rounded-sm transition-colors"
                >
                  <ExternalLinkIcon />
                </a>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 pr-12">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm font-mono text-cyan-800 dark:text-cyan-300 mt-2 mb-4 bg-cyan-100 dark:bg-cyan-950/40 inline-block px-3 py-1 rounded">
                  {project.tech}
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                  {project.overview}
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.value}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 text-left"
          >
            Professional Experience
          </h2>

          <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl text-left">
            <div className="flex flex-col md:flex-row justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Software Engineer I
                </h3>
                <p className="text-cyan-700 dark:text-cyan-400 font-medium text-lg mt-1">
                  Motorola Solutions
                </p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 font-mono mt-2 md:mt-0 text-sm md:text-base">
                June 2023 - Present
              </span>
            </div>

            <ul className="list-disc list-outside ml-5 space-y-4 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed marker:text-cyan-600 dark:marker:text-cyan-500">
              <li>
                <strong className="text-slate-900 dark:text-slate-100">
                  Secure Enterprise Architecture:
                </strong>{' '}
                Architected secure AWS infrastructure (EC2, custom AMIs,
                Secrets Manager) and engineered compliant cryptographic software
                for mission-critical, first-responder systems.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">
                  AI-Driven Velocity:
                </strong>{' '}
                Spearheaded the adoption of AI-assisted workflows (Windsurf,
                Claude Code, Gemini), accelerating project delivery by 75% by
                compressing month-long development cycles into a single week.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">
                  DevOps & CI/CD:
                </strong>{' '}
                Modernized deployment pipelines by containerizing development
                environments with Docker, managing Jenkins/Bitbucket CI/CD, and
                driving down defect backlogs via SonarQube and Klocwork.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">
                  Embedded Systems & Release:
                </strong>{' '}
                Engineered high-reliability firmware for STM32 V8 boards and took
                full ownership of end-to-end release management via Conan
                packages to ensure stable production rollouts.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">
                  Technical Leadership & Mentorship:
                </strong>{' '}
                Selected as the designated Cyber Security Champion to advise
                engineering leadership on security posture, while actively
                mentoring incoming engineers to accelerate their technical
                onboarding.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6"
          >
            Technical Skills
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            The stack I use to design, build, and ship secure, mission-critical
            systems.
          </p>
          <div className="overflow-x-auto bg-white dark:bg-slate-900/50 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                Technical skills grouped by category
              </caption>
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  <th
                    className="py-5 px-6 font-bold text-slate-900 dark:text-slate-100 w-1/3"
                    scope="col"
                  >
                    Category
                  </th>
                  <th
                    className="py-5 px-6 font-bold text-slate-900 dark:text-slate-100"
                    scope="col"
                  >
                    Technologies & Methodologies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {skills.map((skill) => (
                  <tr
                    key={skill.category}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-slate-200">
                      {skill.category}
                    </td>
                    <td className="py-4 px-6 font-mono text-sm text-cyan-700 dark:text-cyan-200">
                      {skill.items}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-500 py-10 text-center text-sm print:hidden">
        <p>© {new Date().getFullYear()} Sam Degnan.</p>
      </footer>
    </div>
  );
}
