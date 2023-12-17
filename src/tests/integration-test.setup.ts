import { registerConcreteObjects } from '@/di-container'
import { beforeAll } from 'vitest'
import { execSync } from 'child_process'
import generateUUID from '@/lib/crypto/identity-generator'
import { Client } from 'pg'

const username = 'postgres'
const password = '123456'
const host = 'localhost'
const database = 'my-bookshelf'

beforeAll(async () => {
  const schema = `test-${generateUUID()}`
  const connectionString = `postgresql://${username}:${password}@${host}:5432/${database}?schema=${schema}`
  process.env.DATABASE_URL = connectionString
  execSync('pnpm prisma migrate deploy')
  registerConcreteObjects()

  return async () => {
    const client = new Client(connectionString)
    await client.connect()
    await client.query(`DROP SCHEMA "${schema}" CASCADE;`)
    await client.end()
  }
})
