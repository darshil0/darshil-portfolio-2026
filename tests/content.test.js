import { expect, test } from 'vitest'
import fs from 'fs'
import path from 'path'

test('index.html has correct version and experience', () => {
  const content = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')
  expect(content).toContain('v2026.3.20')
  expect(content).toContain('14+ years')
})

test('portfolio-website.jsx has correct version and experience', () => {
  const content = fs.readFileSync(path.resolve(__dirname, '../portfolio-website.jsx'), 'utf8')
  expect(content).toContain('v2026.3.20')
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
