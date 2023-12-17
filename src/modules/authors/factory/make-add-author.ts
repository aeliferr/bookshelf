import { inject } from '@/di-container'
import type AuthorRepository from '@/repositories/author-repository'
import AddAuthor from '../use-cases/add-author'

export default function makeAddAuthor (): AddAuthor {
  const repository = inject<AuthorRepository>('AuthorRepository')
  const addAuthor = new AddAuthor(repository)
  return addAuthor
}
