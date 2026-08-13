# Sam Degnan

Software engineer building security-minded systems across zero-knowledge privacy, post-quantum cryptography, multi-cloud infrastructure, embedded software, and developer tooling.

This repository contains the source for [samueladegnan.github.io](https://samueladegnan.github.io/), Sam Degnan's GitHub Pages software engineering portfolio. It documents the decisions and limits behind three independent projects:

- [Zero-Knowledge Fitness Platform](https://samueladegnan.github.io/zk-fitness-platform/)
- [SEEO Multi-Cloud Orchestrator](https://samueladegnan.github.io/seeo-aws-orchestrator/)
- [AI CI/CD Security Guardrail](https://samueladegnan.github.io/ai-cicd-security-guardrail/)

## Local development

```bash
npm install
npm run dev
```

Run the production checks with:

```bash
npm run lint
npm run build
```

The production build pre-renders the React homepage into `dist/index.html` so crawlers receive the portfolio content without waiting for JavaScript. The build also validates the generated SEO metadata, structured data, canonical links, sitemap coverage, and static heading structure.

Project cards use a project-owned `portfolio.json` contract when one is available, while keeping the local card data as a per-project baseline during migration. See [PROJECT-METADATA.md](PROJECT-METADATA.md) for the schema and update flow.

## Portfolio proof

The homepage links to the live project pages and opens the résumé in the browser's built-in PDF viewer, where it can be downloaded. The projects cover client-owned personal health and fitness data, post-quantum cryptography, Terraform-backed multi-cloud lifecycle control, and CI security tooling.

## Contact

- [LinkedIn](https://linkedin.com/in/sam-degnan/)
- [GitHub](https://github.com/samueladegnan)
- [Résumé](https://samueladegnan.github.io/Sam-Degnan-Resume.pdf)
- [Email](mailto:samueladegnan@gmail.com)