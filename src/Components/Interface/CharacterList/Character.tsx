import React from 'react'

type Props = {
  name: string
  characterClass: string
}

function Character({ name, characterClass }: Props) {

  function getImageUrl() {
    switch (characterClass?.toLowerCase()) {
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

export default Character