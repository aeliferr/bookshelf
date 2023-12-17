import generateUUID from '@/lib/crypto/identity-generator'

export default class Book {
  id: string
  name: string
  authorId: string
  releaseDate: Date

  /**
   *
   */
  private constructor ({ id, name, authorId, releaseDate }: Book) {
    this.id = id
    this.name = name
    this.authorId = authorId
    this.releaseDate = releaseDate
  }

  static create ({ name, authorId, releaseDate }: Omit<Book, 'id'>, id: string | null = null): Book {
    const book = new Book({ id: id ?? generateUUID(), name, authorId, releaseDate })

    return book
  }
}
