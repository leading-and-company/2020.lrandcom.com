import { request } from '~/utils/request'
import { ArticleTypes } from '~/types'

export default async ({ id }: { id: string }): Promise<ArticleTypes> => {
  const article = await request.get(`/articles/${id}`, {
    headers: { 'X-API-KEY': process.env.MICROCMS_KEY }
  })
  return article
}
