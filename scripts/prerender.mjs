import { readdir, readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

const server = await createServer({
  root: process.cwd(),
  appType: 'custom',
  logLevel: 'error',
  server: {
    middlewareMode: true,
  },
})

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
  const renderedApp = render()
  const indexPath = new URL('../dist/index.html', import.meta.url)
  const assetsPath = new URL('../dist/assets/', import.meta.url)
  const assetNames = await readdir(assetsPath)
  const profileAsset = assetNames.find((assetName) => /^headshot-[^/]+\.jpg$/.test(assetName))

  if (!profileAsset) {
    throw new Error('Could not find the generated profile image in dist/assets')
  }

  const productionApp = renderedApp.replaceAll('/src/assets/headshot.jpg', `/assets/${profileAsset}`)
  const indexHtml = await readFile(indexPath, 'utf8')
  const prerenderedHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${productionApp}</div>`)

  if (prerenderedHtml === indexHtml) {
    throw new Error('Could not find the root element in dist/index.html')
  }

  await writeFile(indexPath, prerenderedHtml)
} finally {
  await server.close()
}
