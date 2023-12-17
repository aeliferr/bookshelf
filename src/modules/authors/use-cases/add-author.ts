import type AuthorRepository from '@/repositories/author-repository'
import type AddAuthorInput from '../entities/add-author-input'
import Author from '../entities/author'

export default class AddAuthor {
  /**
   *
   */
  constructor (private readonly authorRepository: AuthorRepository) {

  }

  async execute ({ name }: AddAuthorInput): Promise<Author> {
    const author = Author.create({ name })
    const output = await this.authorRepository.create(author)
    return output
  }
}
