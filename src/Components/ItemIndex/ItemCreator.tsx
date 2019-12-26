import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { isItemType } from '../../services'


const useStyles = createUseStyles((theme: Theme) => ({
  itemCreator: {
    maxWidth: 500,
    padding: theme.padding,
    '& > form > *': {
      width: '100%'
    }
  }
}))

type Props = {

}

function ItemCreator({ }: Props) {
  const classes = useStyles()
  const [type, setType] = useState<Pick<Item, 'type'>>()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    if (value.length === 0) {
      setType(undefined)
    }

    if (isItemType(value)) {
      setType(value)
    }
  }

  return (
    <div className={classes.itemCreator}>
      <h2>New Item</h2>
      <form onSubmit={handleSubmit}>
        <FormControl required>
          <InputLabel htmlFor='type'>Item Type</InputLabel>
          <Select inputProps={{ id: 'type' }} onChange={handleSelect}>
            <option></option>
            <option value='item'>Item</option>
            <option value='armor'>Armor</option>
            <option value='weapon'>Weapon</option>
          </Select>
        </FormControl>
        <TextField id='name' required label='Name' />
        <TextField id='description' multiline required label='Description' />
        <TextField id='stackSize' type='number' label='Stack Size' />
        <TextField id='encumbrance' type='number' label='Encumbrance' />
        {type === 'armor' &&
          <>

          </>
        }
        <Button type="submit">submit</Button>
      </form>
    </div>
  )
}

const foo: ItemBase = {
  description: '',
  effects: [],
  encumbrancePoints: 3,
  id: "qwe",
  name: "1123",
  stackSize: 5,
  encumbrance: 1
}


export default ItemCreator