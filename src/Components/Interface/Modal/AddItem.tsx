import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import ItemDetails from '../../_shared/ItemDetails'
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
  const [selected, setSelected] = useState<Item>()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!selected) {
      return
    }

    onClose()
  }

  throw Error("TODO")

  // return (
  //   <FormContainer className={classes.addItem} ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Item">
  //     <Autocomplete
  //       id="itemSelect"
  //       options={itemIndex}
  //       getOptionLabel={(option: Item) => option.name}
  //       disablePortal
  //       onChange={(e, item) => setSelected(item)}
  //       renderInput={params => (
  //         <TextField id="item" {...params} required label="Item" fullWidth placeholder="Filter by typing" />
  //       )}
  //     />
  //     {/* {selected &&
  //       <ItemDetails item={selected} /> TODO
  //     } */}
  //   </FormContainer>
  // )
})

export default AddItem