import React, { useRef, useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  input: {
    width: 'calc(100% - 2px)',
    textAlign: 'center',
    fontSize: '1em',
    color: (error: boolean) => error ? 'red' : '',
    border: 'none'
  }
}))

type Props = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value' | 'defaultValue' | 'onBlur'> & {
  value: string
  validate?: (value: string) => boolean
  onChange?: (value: string) => void
  onBlur?: (value: string, isValid: boolean, e: React.FocusEvent<HTMLInputElement>) => void
}

function Input({ value, validate = () => true, onChange, onBlur, ...inputProps }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const { input } = useStyles(error)

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.value = `${value}`
  }, [value])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (validate?.(e.target.value)) {
      onChange?.(e.target.value)
      setError(false)
    } else {
      setError(true)
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setError(false)
    onBlur?.(e.target.value, validate(e.target.value), e)
  }

  return (
    <input {...inputProps} onBlur={handleBlur} className={input} ref={inputRef} onChange={handleChange} defaultValue={value} />
  )
}
export default Input