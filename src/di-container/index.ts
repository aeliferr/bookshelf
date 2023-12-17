import type Author from '@/modules/authors/entities/author'
import type AuthorRepository from '@/repositories/author-repository'
import type BookRepository from '@/repositories/book-repository'
import { type CreateBookInput } from '@/repositories/book-repository'
import PrismaAuthorRepository from '@/repositories/prisma/author-repository'
import PrismaBookRepository from '@/repositories/prisma/book-repository'

interface Register {
  key: string
  item: any
}

const container: Register[] = []

function register (key: string, item: any): void {
  if (container.find(x => x.key === key) !== undefined) throw new Error('Object alredy registered')

  container.push({
    key,
    item
  })
}

function inject<T> (key: string): T {
  const register = container.find(x => x.key === key)

  if (register !== null && register !== undefined) { return register.item as T }

  throw new Error('Register not found')
}

function registerConcreteObjects (): void {
  register('BookRepository', new PrismaBookRepository())
  register('AuthorRepository', new PrismaAuthorRepository())
}

function registerFakeObjects (): void {
  const bookRepository = {
    async create (input: CreateBookInput): Promise<void> {
      console.log('created')
    }
  } satisfies BookRepository

  const authorRepository = {
    async create (input: Author) {
      console.log('author created')
      return input
    }
  } satisfies AuthorRepository

  register('BookRepository', bookRepository)
  register('AuthorRepository', authorRepository)
}

export { registerFakeObjects, registerConcreteObjects, inject }
