import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from '../../../hooks'
import { selectItemIndex } from '../../../Redux/selectors'
import Select from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Autocomplete from '@material-ui/lab/Autocomplete'

const useStyles = createUseStyles((theme: Theme) => ({
  AddItem: {

  }
}))

type Props = {
  onClose: () => void
  characterId: string
}

const AddItem = React.forwardRef<HTMLFormElement, Props>(({ characterId, onClose }, ref) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const itemIndex = useSelector(selectItemIndex)
  const [selected, setSelected] = useState<Item>()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.persist()
    console.log(e)
  }

  return (
    <FormContainer ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Language">
      <Autocomplete
        id="combo-box-demo"
        options={itemIndex}
        getOptionLabel={(option: Item) => option.name}
        style={{ width: 300 }}
        disablePortal
        onChange={(e, item) => setSelected(item)}
        renderInput={params => (
          <TextField {...params} label="Combo box" variant="outlined" fullWidth />
        )}
      />
    </FormContainer>
  )
})

export default AddItem