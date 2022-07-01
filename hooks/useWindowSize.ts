import { useDispatch } from 'react-redux'
import { setSp } from '~/store/media'
import { styles } from '~/utils/styles'
import { useEffect, useCallback } from 'react'
import { setWindowSize } from '~/store/window'

export const useWindowSize = (): void => {
  const dispatch = useDispatch()
  const set = useCallback(() => {
    dispatch(
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    )
    if (window.innerWidth <= styles.sizes.breakpoint) {
      dispatch(setSp(true))
    } else {
      dispatch(setSp(false))
    }
  }, [dispatch])

  useEffect(() => {
    set()
    window.addEventListener('resize', () => {
      set()
    })
  }, [set, dispatch])
}
