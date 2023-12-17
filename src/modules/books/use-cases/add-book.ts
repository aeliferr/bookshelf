import type BookRepository from '../../../repositories/book-repository'
import Book from '../entities/book'

export interface AddBookInput {
  name: string
  authorId: string
  releaseDate: Date
}

export default class AddBook {
  /**
   *
   */
  constructor (private readonly bookRepository: BookRepository) {

  }

  async execute ({ authorId, name, releaseDate }: AddBookInput): Promise<void> {
    const book = Book.create({ authorId, name, releaseDate })
    await this.bookRepository.create({ id: book.id, authorId, name, releaseDate })
  }
}
