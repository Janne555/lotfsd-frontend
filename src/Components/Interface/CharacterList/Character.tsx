import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../../hooks'
import { selectCharacterId, selectClass } from '../../../Redux/selectors'

const useStyles = createUseStyles((theme: Theme) => ({
  character: {
    height: 150,
    width: 150,
    backgroundColor: theme.colorGrey,
    display: 'flex',
    justifyItems: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
    border: '7px solid black',
    '& img': {
      height: 100,
      width: 100,
      marginTop: '1rem'
    },
    '& h3': {
      justifySelf: 'end'
    }
  }
}))

type Props = {
  name: string
}

export default function Character({ name }: Props) {
  const classes = useStyles()
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
      default:
        return undefined
    }
  }

  return (
    <div className={classes.character}>
      <img src={getImageUrl()} alt="class" />
      <h3>{name}</h3>
    </div>
  )
}
