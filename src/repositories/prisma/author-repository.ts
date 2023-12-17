import type Author from '@/modules/authors/entities/author'
import type AuthorRepository from '../author-repository'
import { prisma } from '@/lib/prisma'

export default class PrismaAuthorRepository implements AuthorRepository {
  async create ({ id, name }: Author): Promise<Author> {
    const author = await prisma.author.create({
      data: {
        id,
        name
      }
    })

    return author
  }
}
