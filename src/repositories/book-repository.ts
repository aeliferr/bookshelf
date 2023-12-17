export interface CreateBookInput {
  id: string
  name: string
  authorId: string
  releaseDate: Date
}

export default interface BookRepository {
  create: (input: CreateBookInput) => Promise<void>
}
