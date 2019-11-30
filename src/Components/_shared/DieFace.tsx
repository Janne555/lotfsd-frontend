import React from 'react'
import { createUseStyles } from 'react-jss'

type Props = {
  value: number
}

const useStyles = createUseStyles((theme: Theme) => ({
  dieFaceRoot: {
    width: 50,
    height: 50,
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '33% 33% 33%',
    gridAutoFlow: 'row',
    border: theme.border,
    borderRadius: '10%',
    padding: 1
  }
}))

export default function DieFace({ value }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.dieFaceRoot}>
      {
        Array.from({ length: 6 }, (v, i) => (
          <Circle key={i} filled={value > i} />
        ))
      }
    </div>
  )
}

const useSubStyles = createUseStyles({
  circleRoot: {
    border: '1px solid black',
    borderRadius: '100%',
    width: 7,
    height: 7,
    justifySelf: 'center',
    alignSelf: 'center',
    backgroundColor: (filled: boolean) => filled ? 'black' : ''
  }
})

function Circle({ filled }: { filled: boolean }) {
  const classes = useSubStyles(filled)
  return (
    <div className={classes.circleRoot} />
  )
}