import React from 'react'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import CheckBox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useDispatch } from '../../../hooks'
import { addLanguage } from '../../../Redux/actions'

type Props = {
  onClose: () => void
  characterId: string
}

const AddLanguage = React.forwardRef<HTMLFormElement, Props>(function AddLanguage({ onClose, characterId }, ref) {
  const dispatch = useDispatch()

  function handleSubmit(e: any) {
    e.preventDefault()
    dispatch(addLanguage({
      characterId,
      known: e.target.elements.known.checked,
      name: e.target.elements.name.value
    }))
    onClose()
  }

  return (
    <FormContainer ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Language">
      <TextField id="name" label="Name" required />
      <FormControlLabel control={
        <CheckBox inputProps={{ id: 'known' }} />
      } label="Known" />
    </FormContainer >
  )
})

export default AddLanguage