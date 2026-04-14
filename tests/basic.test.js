import { expect, test } from 'vitest'

test('metadata version is correct', async () => {
  const metadata = await import('../metadata.json')
  expect(metadata.default.version).toBe('2026.4.15')
})

test('metadata experience is correct', async () => {
  const metadata = await import('../metadata.json')
  expect(metadata.default.experience).toBe('14+ years')
})
