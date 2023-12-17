import { registerFakeObjects } from '@/di-container'
import { beforeAll } from 'vitest'

beforeAll(() => {
  registerFakeObjects()
})
