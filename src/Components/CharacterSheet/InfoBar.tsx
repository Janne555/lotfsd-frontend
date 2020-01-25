import React from 'react'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles((theme: Theme) => ({
  infoBarRoot: {
    height: 100,
    backgroundColor: theme.componentBackgroundColor,
    border: theme.border,
    padding: theme.padding,
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    columnSpan: 'all'
  },
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    alignItems: 'center',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > span:last-of-type': {
        fontWeight: 'bold',
        fontSize: '1.1em'
      },
      '& > span:first-of-type': {
        marginTop: 5,
        minWidth: '80%',
        borderBottom: '1px solid black',
        textAlign: 'center'
      }
    }
  },
  '@media (max-width: 1100px)': {
    infoBarRoot: {
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content'
    },
    info: {
      gridTemplateColumns: '50% 50%'
    }
  }
}))

type Props = {
  info: Info
}

function InfoBar({ info }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.infoBarRoot}>
      <h1>Lamentations of the fullstack developer</h1>
      <div className={classes.info}>
        {
          Object.entries(info).map(([key, value]) => <KeyVal key={key} name={key} value={value} />)
        }
      </div>
    </div>
  )
}

type SubProps = {
  name: string
  value: string | number
}

function KeyVal({ name, value }: SubProps) {
  return (
    <div>
      <span>{value}</span>
      <span>{name}</span>
    </div>
  )
}

export default InfoBar