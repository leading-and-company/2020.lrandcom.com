/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, DependencyList } from 'react'

type ParamsTypes = {
  ref: React.RefObject<HTMLElement>
  observeIn?: (ref?: React.MutableRefObject<unknown>) => void
  observeOut?: (ref?: React.MutableRefObject<unknown>) => void
  rootMargin?: string
  deps: DependencyList
}

export const useObserve = (params: ParamsTypes): void => {
  const { ref, observeIn, observeOut, rootMargin, deps } = params
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (observeIn) observeIn()
        } else {
          if (observeOut) observeOut()
        }
      },
      {
        rootMargin
      }
    )
    if (ref.current) observer.observe(ref.current)
  }, deps)
}
