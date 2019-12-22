import React from 'react'
import { createUseStyles } from 'react-jss'
import range from 'lodash/range'

type Props = {
  value: number,
  onValueChange?: (value: number) => void
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

export default function DieFace({ value, onValueChange }: Props) {
  const classes = useStyles()

  function handleClick(index: number) {
    onValueChange?.(index + 1)
  }

  return (
    <div className={classes.dieFaceRoot}>
      {
        range(6).map(i => (
          <Circle key={i} filled={value > i} index={i} onClick={handleClick} />
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

type SubProps = {
  filled: boolean
  index: number
  onClick: (index: number) => void
}

function Circle({ filled, index, onClick }: SubProps) {
  const classes = useSubStyles(filled)
  return (
    <div className={classes.circleRoot} onClick={() => onClick(index)} />
  )
}