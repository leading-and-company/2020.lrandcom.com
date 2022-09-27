import { MICROCMS_KEY } from '~/lib/constants'
import { ArticleTypes } from '~/types'
import { request } from '~/utils/request'

export default async (): Promise<ArticleTypes[]> => {
  const { totalCount } = await request.get('/articles?limit=0', {
    headers: { 'X-MICROCMS-API-KEY': MICROCMS_KEY },
  })
  const articles = []
  for (let i = 0; i * 100 <= totalCount; i++) {
    const { contents } = await request.get(
      `/articles?limit=${
        totalCount < (i + 1) * 100 ? totalCount - i * 100 : 100
      }&offset=${i * 100}`,
      { headers: { 'X-MICROCMS-API-KEY': MICROCMS_KEY } }
    )
    articles.push(...contents)
  }
  return articles
}
