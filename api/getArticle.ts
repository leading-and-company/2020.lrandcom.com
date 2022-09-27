import { ArticleTypes } from '~/types'
import { request } from '~/utils/request'

export default async ({ id }: { id: string }): Promise<ArticleTypes> => {
  const article = await request.get(`/articles/${id}`, {
    headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_KEY },
  })
  return article
}
