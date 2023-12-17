import generateUUID from '@/lib/crypto/identity-generator'

export default class Author {
  id: string
  name: string

  /**
   *
   */
  private constructor ({ id, name }: Author) {
    this.id = id
    this.name = name
  }

  static create ({ name }: Omit<Author, 'id'>, id: string | null = null): Author {
    const author = new Author({ id: id ?? generateUUID(), name })

    return author
  }
}
