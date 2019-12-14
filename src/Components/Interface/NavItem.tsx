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
    '&:hover': {
      backgroundColor: theme.colorPurpleDark,
      cursor: 'pointer'
    },
    marginLeft: (end: boolean | undefined) => end ? 'auto' : ''
  }
}))

type Props = {
  name: string
  label?: string
  onMouseEnter?: (name: string) => void
  end?: boolean
}

export default function NavItem({ name, label, onMouseEnter, end }: Props) {
  const classes = useStyles(end)
  return (
    <div className={classes.navItem} {...(onMouseEnter ? { onMouseEnter: () => onMouseEnter(name) } : {})} >
      <span>{label || name}</span>
    </div>
  )
}
