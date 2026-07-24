import React, { useEffect, useState } from 'react';
import profilePic from './assets/headshot.jpg';

const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

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

  const projects = [
    {
      title: 'Secure Ephemeral Environment Orchestrator (SEEO)',
      tech: 'Ruby 3.3, Ruby on Rails 7, aws-sdk-ruby, AWS (EC2, EBS, Secrets Manager, DynamoDB), Terraform, Docker, GitHub Actions, Vanilla JS, CSS',
      overview: 'An internal DevOps tool that automates the deployment of secure, TTL-bound AWS infrastructure through a REST API and web dashboard.',
      value: 'Proves full-stack cloud orchestration capabilities, zero-trust credential management, background job scheduling, and infrastructure-as-code automation.',
      link: 'https://samueladegnan.github.io/seeo-aws-orchestrator/',
    },
    {
      title: 'Zero-Knowledge Fitness Platform',
      tech: 'HTML5, Vanilla JavaScript, Web Crypto API (AES-256-GCM), Argon2id, Node.js, Express, PostgreSQL, Docker',
      overview: 'A privacy-first, full-stack strength training platform utilizing a Zero-Knowledge Architecture that encrypts all exercise logs client-side before persisting data to the cloud.',
      value: 'Demonstrates full-stack mastery blended with end-to-end cryptography. Proves the ability to design privacy-preserving cloud architectures and build secure, production-ready systems.',
      link: 'https://samueladegnan.github.io/zk-fitness-platform/',
    },
    {
      title: 'AI-Driven CI/CD Guardrail for Secure Coding',
      tech: 'Python, GitHub Actions, Docker, Jenkins, SonarQube, cppcheck, C/C++',
      overview: 'A reusable GitHub Action / CI component that uses an LLM to triage static-analysis findings for C/C++, mapping CWEs to compliance controls and flagging real security risks.',
      value: 'Highlights experience with DevOps, secure coding, compliance mapping, and the ability to leverage AI to solve enterprise-level developer efficiency problems.',
      link: 'https://samueladegnan.github.io/ai-cicd-security-guardrail/',
    },
  ];

  const skills = [
    {
      category: 'Languages & Frameworks',
      items: 'C/C++, Python, Ruby on Rails, Java, JavaScript (Node.js), HTML/CSS, Bash, SQL',
    },
    {
      category: 'Cloud & Infrastructure',
      items: 'AWS (EC2, EBS, Secrets Manager, IAM, DynamoDB), Docker, Linux/UNIX, Terraform, PostgreSQL, SQLite',
    },
    {
      category: 'Security & Cryptography',
      items: 'Zero-Knowledge Architecture, OpenSSL, AES-256-GCM, Argon2id, Web Crypto API, Key Management, Code Signing',
    },
    {
      category: 'DevOps & CI/CD',
      items: 'Jenkins, Bitbucket CI, Azure DevOps, Git, GitHub Actions, GitLab, CMake, Conan, SonarQube, Klocwork, SARIF, cppcheck',
    },
    {
      category: 'Embedded Systems',
      items: 'RTOS, STM32 V8, BeagleBone, Lauterbach JTAG, I2C/SPI, UART',
    },
    {
      category: 'Applied AI & ML',
      items: 'LLM Integration, Prompt Engineering, Output Validation',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300 font-sans selection:bg-cyan-200 selection:text-cyan-900 dark:selection:bg-cyan-900 dark:selection:text-cyan-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-cyan-600 focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="bg-white/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 py-8 px-6 sm:px-12 lg:px-24 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Sam Degnan</h1>
            <p className="text-lg text-cyan-700 dark:text-cyan-400 mt-2 font-medium tracking-wide">
              Software Engineer | Mission-Critical Systems & AI Integration
            </p>
          </div>
          <div className="flex items-center gap-4">
            <nav aria-label="Contact links" className="flex flex-col gap-3 text-sm font-medium">
              <a
                href="mailto:samueladegnan@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 rounded-sm transition-colors"
                aria-label="Send email to samueladegnan@gmail.com"
              >
                <span className="text-xl" aria-hidden="true">✉️</span> samueladegnan@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/sam-degnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 rounded-sm transition-colors"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                <span className="text-xl" aria-hidden="true">💼</span> linkedin.com/in/sam-degnan
              </a>
              <a
                href="https://github.com/samueladegnan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-700 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 rounded-sm transition-colors"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                <span className="text-xl" aria-hidden="true">💻</span> github.com/samueladegnan
              </a>
            </nav>
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="ml-2 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 transition-colors"
            >
              {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-16 space-y-20">
        <section aria-labelledby="about-heading" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 w-full text-center md:text-left">
            <h2 id="about-heading" className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 text-left">
              About Me
            </h2>
            <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl text-left text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Software Engineer (B.S. from Iowa State) building cryptographic software for first-responder communications at Motorola Solutions.
              </p>
              <p>
                I leverage AI tools to architect secure AWS infrastructure and embedded firmware, accelerating delivery times by over 75%.
              </p>
              <p className="pt-2 text-slate-900 dark:text-slate-200 font-medium">
                Relocating to Austin, TX and actively seeking new engineering opportunities.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center mt-4 md:mt-12 w-full md:w-auto mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-200 dark:bg-cyan-900/20 rounded-full scale-110 -z-10 blur-md motion-reduce:blur-none" aria-hidden="true" />
              <img
                src={profilePic}
                alt="Sam Degnan headshot"
                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-slate-200 dark:border-slate-800"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 uppercase tracking-wider text-sm">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="relative bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-900/50 transition-all shadow-lg group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} (opens in new tab)`}
                  className="absolute top-8 right-8 text-slate-500 hover:text-cyan-700 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:rounded-sm transition-colors"
                >
                  <ExternalLinkIcon />
                </a>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 pr-10">{project.title}</h3>
                <p className="text-sm font-mono text-cyan-700 dark:text-cyan-400 mt-2 mb-4 bg-cyan-100 dark:bg-cyan-950/30 inline-block px-3 py-1 rounded">
                  Tech Stack: {project.tech}
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                  <strong className="text-slate-900 dark:text-slate-100">Overview:</strong> {project.overview}
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-slate-100">Showcase Value:</strong> {project.value}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 text-left">
            Professional Experience
          </h2>

          <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl text-left">
            <div className="flex flex-col md:flex-row justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Software Engineer I</h3>
                <p className="text-cyan-700 dark:text-cyan-400 font-medium text-lg mt-1">Motorola Solutions</p>
              </div>
              <span className="text-slate-500 dark:text-slate-400 font-mono mt-2 md:mt-0 text-sm md:text-base">June 2023 - Present</span>
            </div>

            <ul className="list-disc list-outside ml-5 space-y-4 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed marker:text-cyan-600 dark:marker:text-cyan-500">
              <li>
                <strong className="text-slate-900 dark:text-slate-100">Secure Enterprise Architecture:</strong> Design security compliant cryptographic software for mission-critical systems, and architect secure AWS infrastructure using EC2, custom AMIs, and AWS Secrets Manager.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">AI-Driven Velocity:</strong> Accelerate project delivery by 75% through the integration of AI tools (Windsurf, Claude Code, Gemini), compressing month-long development cycles into a single week.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">DevOps & CI/CD:</strong> Streamline deployment by containerizing development with Docker and maintaining Jenkins and Bitbucket pipelines, while reducing defect backlogs via SonarQube and Klocwork.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">Embedded Systems & Release:</strong> Engineer high-reliability firmware for STM32 V8 boards, and own end-to-end release management using Conan packages.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-slate-100">Technical Leadership & Mentorship:</strong> Serve as the designated Cyber Security Champion advising senior leadership, while mentoring junior engineers to help them acclimate to the role and pursue their career goals.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-2xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 uppercase tracking-wider text-sm">
            Technical Skills Matrix
          </h2>
          <div className="overflow-x-auto bg-white dark:bg-slate-900/50 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  <th className="py-5 px-6 font-bold text-slate-900 dark:text-slate-100 w-1/3" scope="col">Category</th>
                  <th className="py-5 px-6 font-bold text-slate-900 dark:text-slate-100" scope="col">Technologies & Methodologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {skills.map((skill, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-slate-200">{skill.category}</td>
                    <td className="py-4 px-6 font-mono text-sm text-cyan-700 dark:text-cyan-200">{skill.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-500 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Sam Degnan. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
