import { expect, test } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

test('index.html has correct version and experience', () => {
  const content = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')
  expect(content).toContain('v2026.4.5')
  expect(content).toContain('14+ years')
})

test('src/App.jsx has correct version and experience', () => {
  const content = fs.readFileSync(path.resolve(__dirname, '../src/App.jsx'), 'utf8')
  expect(content).toContain('v2026.4.5')
  expect(content).toContain('14+ years')
})

test('index.html has lang="en"', () => {
  const content = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')
  expect(content).toContain('html lang="en"')
})

test('index.html has main-content', () => {
  const content = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')
  expect(content).toContain('id="main-content"')
})
