import { useDispatch, useSelector } from './redux'
import { useState, useLayoutEffect, useContext } from 'react'
import { characterSheetContext } from '../Components/CharacterSheet/CharacterSheet'

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

function useCharacterContext() {
  return useContext(characterSheetContext)
}

export {
  useDispatch,
  useSelector,
  useScreenResizeEvent,
  useCharacterContext
}