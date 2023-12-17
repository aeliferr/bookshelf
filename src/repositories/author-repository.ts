import type Author from '@/modules/authors/entities/author'

export default interface AuthorRepository {
  create: (input: Author) => Promise<Author>
}
