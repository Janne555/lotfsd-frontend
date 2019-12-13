import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1em',
    height: '100%',
    backgroundColor: theme.colorDark,
    color: 'white',
    verticalAlign: 'center',
    '&:hover': {
      backgroundColor: theme.colorDarkest,
    }
  }
}))

type Props = {
  name: string
  label?: string
  onMouseEnter: (name: string) => void
}

export default function NavItem({ name, label, onMouseEnter }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.navItem} onMouseEnter={() => onMouseEnter(name)} >
      <span>{label || name}</span>
    </div>
  )
}
