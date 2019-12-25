import React from 'react'
import { createUseStyles } from 'react-jss'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import CheckBox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useDispatch } from '../../../hooks'
import { addLanguage } from '../../../Redux/actions'

const useStyles = createUseStyles((theme: Theme) => ({
  addLanguage: {

  }
}))

type Props = {
  onClose: () => void
  characterId: string
}

const AddLanguage = React.forwardRef<HTMLFormElement, Props>(({ onClose, characterId }, ref) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  function handleSubmit(e: any) {
    e.preventDefault()
    dispatch(addLanguage({
      id: characterId,
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