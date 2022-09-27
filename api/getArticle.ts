import { MICROCMS_KEY } from '~/lib/constants'
import { ArticleTypes } from '~/types'
import { request } from '~/utils/request'

export default async ({ id }: { id: string }): Promise<ArticleTypes> => {
  const article = await request.get(`/articles/${id}`, {
    headers: { 'X-MICROCMS-API-KEY': MICROCMS_KEY },
  })
  return article
}
