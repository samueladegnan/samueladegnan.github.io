import React from 'react';
import profilePic from './assets/headshot.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-50">
      
      {/* Navigation & Header */}
      <header className="bg-slate-900 border-b border-slate-800 py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">Sam Degnan</h1>
            <p className="text-lg text-cyan-400 mt-2 font-medium tracking-wide">
              Software Engineer | Mission-Critical Systems & AI Integration
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-medium">
            <a href="mailto:samueladegnan@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <span className="text-xl">✉️</span> samueladegnan@gmail.com
            </a>
            <a href="https://linkedin.com/in/sam-degnan/" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <span className="text-xl">💼</span> linkedin.com/in/sam-degnan
            </a>
            <a href="https://github.com/samueladegnan" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <span className="text-xl">💻</span> github.com/samueladegnan
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 py-16 space-y-20">
        
        {/* Hero Section / About Me */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="flex-1 w-full text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-3 mb-6 uppercase tracking-wider text-sm text-left">About Me</h2>
            <p className="text-lg leading-relaxed text-slate-300 bg-slate-900/50 p-8 rounded-xl border border-slate-800 shadow-xl text-left">
              I am a Software Engineer holding a B.S. in Software Engineering from Iowa State University of Science and Technology. 
              I currently design and maintain cryptographic software for first-responder communication systems at Motorola Solutions, ensuring strict compliance with security standards like FIPS. 
              I heavily leverage AI coding assistants to architect secure AWS infrastructure and engineer embedded firmware, meaningfully accelerating project delivery by over 60%. 
              I am relocating to Austin, TX and am actively seeking new engineering roles where I can apply my expertise in secure enterprise architectures.
            </p>
          </div>

          {/* Right Side: Profile Photo */}
          <div className="flex-shrink-0 flex justify-center mt-4 md:mt-12 w-full md:w-auto mb-8 md:mb-0">
            <div className="relative">
              {/* Decorative background glow matched to the cyan theme */}
              <div className="absolute inset-0 bg-cyan-900/20 rounded-full scale-110 -z-10 blur-md"></div>
              <img 
                src={profilePic} 
                alt="Sam Degnan" 
                className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-slate-800"
              />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-3 mb-6 uppercase tracking-wider text-sm">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            
            {[
              {
                title: "Secure Ephemeral Environment Orchestrator (SEEO)",
                tech: "Ruby on Rails, AWS (EC2, EBS, Custom AMIs, Secrets Manager)",
                overview: "An internal DevOps tool that automates the deployment of secure, TTL-bound AWS infrastructure.",
                value: "Proves full-stack orchestration capabilities and strict adherence to zero-trust credential management.",
                link: "https://github.com/samueladegnan/seeo-aws-orchestrator",
              },
              {
                title: "Secure Embedded \"Asset Tracker\" with AI Anomaly Detection & Encrypted Shell",
                tech: "C/C++, STM32 V8, I2C/SPI, TensorFlow Lite for Microcontrollers",
                overview: "Build a secure data-logging device using an STM32 board that monitors environmental sensors and runs a local, lightweight anomaly detection model, with a secure command-line interface (CLI) that requires challenge-response authentication and transmits debugging logs over an encrypted tunnel.",
                value: "Demonstrates ability to handle low-level hardware, implement security protocols, execute cryptographic handshakes, and integrate AI in resource-constrained environments.",
                link: "https://github.com/samueladegnan/stm32-secure-asset-tracker",
              },
              {
                title: "AI-Driven \"CI/CD Guardrail\" for Secure Coding",
                tech: "Python, Jenkins/GitLab Duo, LLM API, Docker, SonarQube",
                overview: "Create a custom GitHub Action or CI pipeline component that uses an LLM to perform \"Context-Aware\" code reviews, specifically looking for secure coding violations in C/C++.",
                value: "Highlights experience with DevOps, secure coding, and the ability to leverage AI to solve enterprise-level developer efficiency problems.",
                link: "https://github.com/samueladegnan/ai-cicd-security-guardrail",
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-cyan-900/50 transition-all shadow-lg group relative">
                {/* External Link Icon */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8 text-slate-500 hover:text-cyan-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
                
                <h3 className="text-2xl font-bold text-slate-100 pr-10">{project.title}</h3>
                <p className="text-sm font-mono text-cyan-400 mt-2 mb-4 bg-cyan-950/30 inline-block px-3 py-1 rounded">Tech Stack: {project.tech}</p>
                <p className="text-slate-300 mb-3 leading-relaxed">
                  <strong className="text-slate-100">Overview:</strong> {project.overview}
                </p>
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-slate-100">Showcase Value:</strong> {project.value}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* Professional Experience */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-3 mb-6 uppercase tracking-wider text-sm">Professional Experience</h2>
          <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-6 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-100">Software Engineer I</h3>
                <p className="text-cyan-400 font-medium text-lg mt-1">Motorola Solutions</p>
              </div>
              <span className="text-slate-400 font-mono mt-2 md:mt-0">June 2023 - Present</span>
            </div>
            <ul className="list-disc list-outside ml-6 space-y-3 text-slate-300 leading-relaxed">
              <li>Serve as the designated Cyber Security Champion, proactively evaluating system security posture and distilling complex risk assessments into actionable status reports for senior leadership.</li>
              <li>Integrate AI coding assistants into daily development workflows for debugging and code generation, accelerating delivery by 66% and compressing a three-week test development cycle into one week.</li>
              <li>Architect secure AWS infrastructure utilizing EC2 instances, custom AMIs, and AWS Secrets Manager, while also engineering embedded firmware targeting STM32 V8 boards.</li>
              <li>Own end-to-end release management and Conan packages, reduce static analysis defect backlogs using SonarQube, and maintain Jenkins and Bitbucket CI/CD pipelines.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section>
          <h2 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-3 mb-6 uppercase tracking-wider text-sm">Technical Skills Matrix</h2>
          <div className="overflow-x-auto bg-slate-900/50 rounded-xl shadow-lg border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800">
                  <th className="py-5 px-6 font-bold text-slate-100 w-1/3">Category</th>
                  <th className="py-5 px-6 font-bold text-slate-100">Technologies & Methodologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-200">Languages & Frameworks</td>
                  <td className="py-4 px-6 font-mono text-sm text-cyan-200">C/C++, Python, Ruby on Rails, Java, JavaScript (Node.js), Bash, C#, SQL</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-200">Cloud & Infrastructure</td>
                  <td className="py-4 px-6 font-mono text-sm text-cyan-200">AWS (EC2, EBS, Secrets Manager, IAM), Docker, Linux/UNIX architecture</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-200">Security & Cryptography</td>
                  <td className="py-4 px-6 font-mono text-sm text-cyan-200">FIPS Compliance, Zero-Trust Architecture, OpenSSL, Key Management, Code Signing</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-200">DevOps & CI/CD</td>
                  <td className="py-4 px-6 font-mono text-sm text-cyan-200">Jenkins, Bitbucket CI, Azure DevOps, Git, CMake, Conan, SonarQube</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-200">Embedded Systems</td>
                  <td className="py-4 px-6 font-mono text-sm text-cyan-200">RTOS, STM32 V8, BeagleBone, Lauterbach JTAG, I2C/SPI, UART</td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-200">Applied AI & ML</td>
                  <td className="py-4 px-6 font-mono text-sm text-cyan-200">LLM Integration (Windsurf, Claude, Gemini), TensorFlow Lite, Prompt Engineering, Output Validation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Sam Degnan. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}