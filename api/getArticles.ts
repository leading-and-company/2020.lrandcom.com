import { request } from '~/utils/request'
import { ArticleTypes } from '~/types'

export default async (): Promise<ArticleTypes[]> => {
  const { totalCount } = await request.get('/articles?limit=0', {
    headers: { 'X-API-KEY': process.env.MICROCMS_KEY }
  })
  const { contents } = await request.get(`/articles?limit=${totalCount}`, {
    headers: { 'X-API-KEY': process.env.MICROCMS_KEY }
  })
  return contents
}
