import { useState, useLayoutEffect } from 'react'

function useScreenResizeEvent(condition: (screenWidth: number) => boolean) {
  const [result, setResult] = useState(condition(window.screen.width))
  useLayoutEffect(() => {
    function listener() {
      const now = condition(window.screen.width)
      if (now !== result) {
        setResult(now)
      }
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  })
  return result
}

export {
  useScreenResizeEvent
}

export * from './user'
export * from './graphqlHooks'