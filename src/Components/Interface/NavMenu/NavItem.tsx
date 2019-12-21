import React, { ReactNode, ReactNodeArray } from 'react'
import { createUseStyles } from 'react-jss'
import { useNavMenuContext } from './NavBar'

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
    '&:hover': {
      backgroundColor: theme.colorPurpleDark,
      cursor: 'pointer'
    },
    '&:focus': {
      backgroundColor: theme.colorPurpleDark,
      cursor: 'pointer'
    },
    marginLeft: (end: boolean | undefined) => end ? 'auto' : ''
  }
}))

type Props = {
  name: string
  label?: string
  end?: boolean
  children?: ReactNode | ReactNodeArray
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function NavItem({ name, label, end, onClick }: Props) {
  const classes = useStyles(end)
  const { onFocusOrHover } = useNavMenuContext()

  function handleFocusOrHover() {
    if (!end) {
      onFocusOrHover(name)
    }
  }

  return (
    <button className={classes.navItem} onMouseEnter={handleFocusOrHover} onFocus={handleFocusOrHover} onClick={onClick} >
      <span>{label || name}</span>
    </button>
  )
}
