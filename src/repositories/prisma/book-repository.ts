import type BookRepository from '../book-repository'
import { type CreateBookInput } from '../book-repository'
import { prisma } from '@/lib/prisma'

export default class PrismaBookRepository implements BookRepository {
  async create (input: CreateBookInput): Promise<void> {
    await prisma.book.create({
      data: {
        authorId: input.authorId,
        name: input.name,
        id: input.id,
        releaseDate: input.releaseDate
      }
    })
  }
}
