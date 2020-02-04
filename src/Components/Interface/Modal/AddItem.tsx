import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import ItemDetails from '../../_shared/ItemDetails'
import { AddItemInstance, AddItemInstanceVariables } from '../../../../__generated__/apolloTypes/AddItemInstance'
import { ItemsQuery_items } from '../../../../__generated__/apolloTypes/ItemsQuery'
import { useMutation } from '@apollo/react-hooks'
import { ADD_ITEM_INSTANCE_MUTATION, CHARACTER_SHEET_QUERY } from '../../../constants'
import { CharacterSheetQuery, CharacterSheetQueryVariables } from '../../../../__generated__/apolloTypes/CharacterSheetQuery'

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
  itemIndex: ItemsQuery_items[]
}

const AddItem = React.forwardRef<HTMLFormElement, Props>(function AddItem({ characterId, onClose, itemIndex }, ref) {
  const classes = useStyles()
  const [selected, setSelected] = useState<ItemsQuery_items>()
  const [mutate, { loading, error, called }] = useMutation<AddItemInstance, AddItemInstanceVariables>(ADD_ITEM_INSTANCE_MUTATION, {
    update: (cache, { data }) => {
      if (data && characterId) {
        cache.writeQuery<CharacterSheetQuery, CharacterSheetQueryVariables>({
          data: { characterSheet: data.addItemInstance },
          query: CHARACTER_SHEET_QUERY,
          variables: { id: characterId }
        })
      }
    }
  })

  useEffect(() => {
    if (!loading && called && !error) {
      onClose()
    }
  }, [loading, called, error])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!selected) {
      return
    }

    mutate({
      variables: {
        characterSheetId: characterId,
        equipped: false,
        itemId: selected.id
      }
    })
  }

  return (
    <FormContainer className={classes.addItem} ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Item" loading={loading} error={error?.message}>
      <Autocomplete
        id="itemSelect"
        options={itemIndex}
        getOptionLabel={(option: ItemsQuery_items) => option.name}
        disablePortal
        onChange={(e, item: ItemsQuery_items) => setSelected(item)}
        renderInput={params => (
          <TextField id="item" {...params} required label="Item" fullWidth placeholder="Filter by typing" />
        )}
      />
      {selected &&
        <ItemDetails item={selected} />
      }
    </FormContainer>
  )
})

export default AddItem