
import React, { useEffect, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ATTRIBUTE_DETAILS, ATTRIBUTE_TITLES } from '../../constants'
import { useDispatch } from '../../hooks'
import { setAttribute } from '../../Redux/reducers/attributes'

type AttributeProps = {
  title: keyof Attributes
  score: number
  index: number
  modifier: number
}

type StyleProps = {
  index: number,
  error: boolean
}

const useAttributeStyles = createUseStyles((theme: Theme) => ({
  title: {
    gridColumnStart: 2,
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2 - 1,
    justifySelf: 'center',
    alignSelf: 'end'
  },
  scoreRoot: {
    border: theme.border,
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2,
    gridColumnStart: 2,
    justifySelf: 'center',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  score: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1em',
    color: ({ error }: StyleProps) => error ? 'red' : ''
  },
  modifierRoot: {
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2,
    gridColumnStart: 3,
    border: theme.border,
    borderRadius: '100%',
    margin: 1,
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40
  },
  modifier: {
    alignSelf: 'center'
  },
  details: {
    gridRowStart: ({ index }: StyleProps) => (index + 1) * 2,
    gridColumnStart: 4
  }
}))


function Attribute({ title, score, index, modifier }: AttributeProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const classes = useAttributeStyles({ index, error })
  const dispatch = useDispatch()

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.value = `${score}`
  }, [score])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = parseInt(e.target.value)
    if (!isNaN(value)) {
      dispatch(setAttribute({ attributeName: title, value }))
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <label htmlFor={`attribute-${title}`} className={classes.title}>{ATTRIBUTE_TITLES[title]}</label>
      <div className={classes.scoreRoot}>
        <input id={`attribute-${title}`} ref={inputRef} type="number" className={classes.score} defaultValue={score} onChange={handleChange}></input>
      </div>
      <div className={classes.modifierRoot}>
        <span className={classes.modifier}>{modifier}</span>
      </div>
      <span className={classes.details}>{ATTRIBUTE_DETAILS[title]}</span>
    </>
  )
}

export default Attribute