# Project-owned portfolio cards

Each project can own the copy used for its card on the main portfolio by adding a `portfolio.json` file to the root of its repository. The main portfolio reads that file from the repository's `main` branch after the page loads.

The current local project data remains the baseline used for the initial render. If a project has no metadata file, the file is unavailable, or a field is invalid, only that project or field keeps the baseline copy. This keeps the homepage useful while projects are migrated one at a time.

## Contract

```json
{
  "schemaVersion": 1,
  "slug": "seeo-aws-orchestrator",
  "category": "Multi-cloud operations",
  "title": "SEEO Multi-Cloud Orchestrator",
  "summary": "Policy-gated, short-lived environments across AWS, Azure, Google Cloud, and OCI, provisioned through Terraform.",
  "notes": [
    {
      "label": "Build",
      "text": "Rails and React coordinate provider adapters, reusable Terraform modules, RBAC, OPA/Rego policy checks, and TTL cleanup."
    },
    {
      "label": "Scope",
      "text": "The public demo uses mock mode; it does not create cloud resources or require cloud credentials."
    }
  ],
  "stack": [
    "Ruby on Rails",
    "React",
    "AWS",
    "Azure",
    "Google Cloud",
    "OCI",
    "Terraform",
    "Terraform modules",
    "OPA/Rego"
  ],
  "proofLabel": "Evidence",
  "proof": "Multi-cloud Terraform modules, persisted environment state, provider adapters, retry-safe cleanup, mock mode, OPA policy checks, and CI security artifacts."
}
```

The `slug` must match the project identifier in `src/project-data.js`. Project-owned metadata controls the descriptive copy, stack, and evidence. The main portfolio continues to control ordering, links, visual treatment, and the initial server-rendered baseline.

## Migration order

1. Add `portfolio.json` to a project repository.
2. Keep the JSON factual and aligned with the project's README and live demo.
3. Publish the repository change on `main`.
4. Open the main portfolio and confirm the card updates without changing its links or layout.
5. Migrate the next project when its copy is ready.
