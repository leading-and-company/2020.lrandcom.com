import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const usePageScroll = (): void => {
  const { asPath } = useRouter()
  useEffect(() => {
    const page = document.getElementById('page')
    if (page) page.scrollTop = 0
  }, [asPath])
}
