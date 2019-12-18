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
  children?: ReactNode | ReactNodeArray
}

export default function NavItem({ name, label, end }: Props) {
  const classes = useStyles(end)
  const { onMouseEnter } = useNavMenuContext()

  return (
    <div className={classes.navItem} onMouseEnter={() => !end && onMouseEnter(name)} >
      <span>{label || name}</span>
    </div>
  )
}
