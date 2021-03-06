import React, { ReactNode, ReactNodeArray } from 'react'
import { createUseStyles } from 'react-jss'
import { useNavMenuContext } from './NavBar'
import { useHistory } from 'react-router-dom'

const useStyles = createUseStyles((theme: Theme) => ({
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1em',
    height: '100%',
    backgroundColor: theme.colorDark,
    color: 'white',
    border: 'none',
    font: 'initial',
    outline: 'none',
    '&:hover': {
      backgroundColor: theme.colorPurpleDark,
      cursor: 'pointer'
    },
    '&:focus': {
      backgroundColor: theme.colorPurpleDark,
      cursor: 'pointer'
    },
    marginLeft: (end: boolean | undefined) => end ? 'auto' : ''
  },
  '@media (max-width: 1100px)': {
    navItem: {
      height: 'initial',
      backgroundColor: theme.colorDark,
      padding: '1rem',
      borderBottom: theme.border,
      width: '100%',
      fontSize: '1.3rem'
    }
  }
}))

type Props = {
  name: string
  label?: string
  end?: boolean
  children?: ReactNode | ReactNodeArray
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  to?: string
}

export default function NavItem({ name, label, end, onClick, to }: Props) {
  const classes = useStyles()
  const { onSetVisible } = useNavMenuContext()
  const history = useHistory()

  function handleClick() {
    if (to) {
      history.push(to)
    }
  }

  function handleFocusOrHover() {
    if (!end) {
      onSetVisible(name)
    }
  }

  return (
    <button className={classes.navItem} onMouseEnter={handleFocusOrHover} onFocus={handleFocusOrHover} onClick={onClick || handleClick} >
      <span>{label || name}</span>
    </button>
  )
}
