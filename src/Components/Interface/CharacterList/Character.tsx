import React from 'react'
import { useSelector } from '../../../hooks'
import { selectCharacterId, selectClass } from '../../../Redux/selectors'

type Props = {
  name: string
}

export default function Character({ name }: Props) {
  const characterId = useSelector(selectCharacterId(name))
  const className = useSelector(selectClass(characterId))

  function getImageUrl() {
    switch (className?.toLowerCase()) {
      case 'cleric':
        return '/images/cleric.svg'
      case 'fighter':
        return '/images/fighter.svg'
      case 'magic-user':
        return '/images/magic_user.svg'
      case 'specialist':
        return '/images/specialist.svg'
      default:
        return undefined
    }
  }

  return (
    <>
      <img src={getImageUrl()} alt="class" />
      <h2>{name}</h2>
    </>
  )
}
