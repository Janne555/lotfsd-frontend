import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from '../../../hooks'
import { addRetainer } from '../../../Redux/thunks'
import FormContainer from '../../_shared/FormContainer'

type Props = {
  onClose: () => void
  characterId: string
}

const AddRetainer = React.forwardRef<HTMLFormElement, Props>(function AddRetainer({ onClose, characterId }, ref) {
  const dispatch = useDispatch()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const target = (e.target as unknown) as { elements: AddRetainerForm }
    e.preventDefault()
    dispatch(addRetainer(target.elements, characterId))
    onClose()
  }

  return (
    <FormContainer ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Retainer">
      <TextField id="name" label="Name" required autoFocus />
      <TextField id="position" label="Position" />
      <TextField id="class" label="Class" />
      <TextField id="level" label="Level" type="number" />
      <TextField id="hitpoints" label="Hitpoints" type="number" />
      <TextField id="wage" label="Wage" type="number" />
      <TextField id="share" label="Share" type="number" />
    </FormContainer>
  )
})

export default AddRetainer