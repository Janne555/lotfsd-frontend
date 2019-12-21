import React, { useRef, useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  input: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1em',
    color: (error: boolean) => error ? 'red' : ''
  }
}))

type Props = {
  value: string
  isValid: (value: string) => boolean
  onChange: (value: string) => void
}

function Input({ value, isValid, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const { input } = useStyles(error)

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.value = `${value}`
  }, [value])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (isValid(e.target.value)) {
      onChange(e.target.value)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <input className={input} ref={inputRef} onChange={handleChange} defaultValue={value} />
  )
}
export default Input