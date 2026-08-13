import { readFile } from 'node:fs/promises'

const indexHtml = await readFile('dist/index.html', 'utf8')
const sitemap = await readFile('public/sitemap.xml', 'utf8')

const requiredSnippets = [
  '<html lang="en">',
  '<title>Sam Degnan | Secure Systems and Cloud Infrastructure Engineer</title>',
  '<meta name="description"',
  '<link rel="canonical" href="https://samueladegnan.github.io/" />',
  '<meta name="robots" content="index, follow',
  '<meta property="og:image" content="https://samueladegnan.github.io/portfolio-og.png"',
  '<meta name="twitter:image" content="https://samueladegnan.github.io/portfolio-og.png"',
  '<meta name="twitter:card"',
  '<h1 id="hero-heading">',
  'Sam-Degnan-Resume.pdf',
  'https://samueladegnan.github.io/zk-fitness-platform/',
  'https://samueladegnan.github.io/seeo-aws-orchestrator/',
  'https://samueladegnan.github.io/ai-cicd-security-guardrail/',
]

const missingSnippets = requiredSnippets.filter((snippet) => !indexHtml.includes(snippet))
const headingCount = indexHtml.match(/<h1\b/g)?.length ?? 0
const jsonLdBlocks = [...indexHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]

for (const [, block] of jsonLdBlocks) JSON.parse(block)

if (missingSnippets.length > 0) {
  throw new Error(`Missing production SEO markup: ${missingSnippets.join(', ')}`)
}

if (headingCount !== 1) {
  throw new Error(`Expected one h1 in the pre-rendered homepage, found ${headingCount}`)
}

if (jsonLdBlocks.length === 0) {
  throw new Error('No valid JSON-LD block found in the pre-rendered homepage')
}

if (indexHtml.includes('/src/')) {
  throw new Error('The pre-rendered homepage contains a source path that will not exist in dist')
}

if (!sitemap.includes('https://samueladegnan.github.io/')) {
  throw new Error('The sitemap does not include the canonical homepage')
}

console.log(`SEO validation passed with ${jsonLdBlocks.length} JSON-LD block and one static h1`)
