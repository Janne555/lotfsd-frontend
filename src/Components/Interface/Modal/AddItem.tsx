import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from '../../../hooks'
import { selectItemIndex } from '../../../Redux/selectors'
// import Select from '@material-ui/core/NativeSelect'
// import InputLabel from '@material-ui/core/InputLabel'
// import FormControl from '@material-ui/core/FormControl'
import Autocomplete from '@material-ui/lab/Autocomplete'
import ItemDetails from '../../_shared/ItemDetails'
import { addItemToInventory } from '../../../Redux/actions'
import { generate } from 'shortid'

const useStyles = createUseStyles((theme: Theme) => ({
  addItem: {
    width: 500,
    '& > form > div:nth-child(2) > h3': { // TODO find a better way to do this
      marginTop: '1rem'
    }
  },
  '@media (max-width: 1100px)': {
    addItem: {
      width: 'initial'
    }
  }
}))

type Props = {
  onClose: () => void
  characterId: string
}

const AddItem = React.forwardRef<HTMLFormElement, Props>(function AddItem({ characterId, onClose }, ref) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const itemIndex = useSelector(selectItemIndex)
  const [selected, setSelected] = useState<Item>()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!selected) {
      return
    }

    dispatch(addItemToInventory({
      characterId,
      instanceId: generate(),
      itemId: selected.id
    }))
    onClose()
  }

  return (
    <FormContainer className={classes.addItem} ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Item">
      <Autocomplete
        id="itemSelect"
        options={itemIndex}
        getOptionLabel={(option: Item) => option.name}
        disablePortal
        onChange={(e, item) => setSelected(item)}
        renderInput={params => (
          <TextField id="item" {...params} required label="Item" fullWidth placeholder="Filter by typing" />
        )}
      />
      {/* {selected &&
        <ItemDetails item={selected} /> TODO
      } */}
    </FormContainer>
  )
})

export default AddItem