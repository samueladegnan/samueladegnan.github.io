const projectMetadataFields = ['category', 'title', 'summary', 'proofLabel', 'proof']

export const fallbackProjects = [
  {
    id: 'zk-fitness-platform',
    number: '01',
    featured: true,
    category: 'Privacy engineering',
    title: 'Zero-Knowledge Fitness Platform',
    summary: 'Browser-first fitness tracking for sensitive health and fitness data, with client-owned keys and encrypted sync.',
    notes: [
      ['Build', 'IndexedDB, encrypted sync, ML-DSA login, ML-KEM key encapsulation, and Groth16.'],
      ['Boundary', 'Readable health and fitness data stays client-side. The proof covers the private summary and payload binding, not encryption.'],
    ],
    stack: ['Vanilla JavaScript', 'PWA', 'IndexedDB', 'Web Crypto API', 'Argon2id', 'HKDF', 'AES-256-GCM', 'ML-KEM-768', 'ML-DSA-65', 'Circom', 'Groth16', 'Poseidon', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://samueladegnan.github.io/zk-fitness-platform/',
    repo: 'https://github.com/samueladegnan/zk-fitness-platform',
    metadataUrl: 'https://raw.githubusercontent.com/samueladegnan/zk-fitness-platform/main/portfolio.json',
    tone: 'coral',
    proofLabel: 'Evidence',
    proof: 'Client-owned health and fitness data, AES-256-GCM, ML-KEM-768, ML-DSA-65, Groth16, Docker, CI checks, and an automated security report.',
  },
  {
    id: 'seeo-aws-orchestrator',
    number: '02',
    category: 'Multi-cloud operations',
    title: 'SEEO Multi-Cloud Orchestrator',
    summary: 'Policy-gated, short-lived environments across AWS, Azure, Google Cloud, and OCI, provisioned through Terraform.',
    notes: [
      ['Build', 'Rails and React coordinate provider adapters, reusable Terraform modules, RBAC, OPA/Rego policy checks, and TTL cleanup.'],
      ['Scope', 'The public demo uses mock mode; it does not create cloud resources or require cloud credentials.'],
    ],
    stack: ['Ruby on Rails', 'React', 'AWS', 'Azure', 'Google Cloud', 'OCI', 'Terraform', 'Terraform modules', 'OPA/Rego'],
    link: 'https://samueladegnan.github.io/seeo-aws-orchestrator/',
    repo: 'https://github.com/samueladegnan/seeo-aws-orchestrator',
    metadataUrl: 'https://raw.githubusercontent.com/samueladegnan/seeo-aws-orchestrator/main/portfolio.json',
    tone: 'blue',
    proof: 'Multi-cloud Terraform modules, persisted environment state, provider adapters, retry-safe cleanup, mock mode, OPA policy checks, and CI security artifacts.',
  },
  {
    id: 'ai-cicd-security-guardrail',
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
    metadataUrl: 'https://raw.githubusercontent.com/samueladegnan/ai-cicd-security-guardrail/main/portfolio.json',
    tone: 'green',
    proof: 'Fixtures, browser demo, mock provider, SARIF output, and CI checks.',
  },
]

function nonEmptyString(value, fallback) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function normaliseNotes(value, fallback) {
  if (!Array.isArray(value)) return fallback

  const notes = value.map((note) => {
    if (Array.isArray(note) && note.length >= 2) {
      return [nonEmptyString(note[0], ''), nonEmptyString(note[1], '')]
    }

    if (note && typeof note === 'object') {
      return [nonEmptyString(note.label, ''), nonEmptyString(note.text, '')]
    }

    return null
  }).filter((note) => note && note[0] && note[1])

  return notes.length > 0 ? notes : fallback
}

function normaliseStack(value, fallback) {
  if (!Array.isArray(value)) return fallback

  const stack = value.filter((item) => typeof item === 'string' && item.trim()).map((item) => item.trim())
  return stack.length > 0 ? stack : fallback
}

export function mergeProjectMetadata(project, metadata) {
  if (!metadata || typeof metadata !== 'object' || metadata.schemaVersion !== 1 || metadata.slug !== project.id) return project

  const merged = { ...project }
  for (const field of projectMetadataFields) merged[field] = nonEmptyString(metadata[field], project[field])
  merged.notes = normaliseNotes(metadata.notes, project.notes)
  merged.stack = normaliseStack(metadata.stack, project.stack)
  return merged
}

export async function loadProjectMetadata(project, signal) {
  if (!project.metadataUrl || typeof fetch !== 'function') return project

  try {
    const response = await fetch(project.metadataUrl, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal,
    })

    if (!response.ok) return project
    return mergeProjectMetadata(project, await response.json())
  } catch {
    return project
  }
}
