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
  },
  range: {
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    '& > div:first-child': {
      marginRight: '1rem'
    },
    '& > div:last-child': {
      marginLeft: '1rem'
    }
  },
  rangeLabel: {
    marginTop: '1rem'
  }
}))

type Props = {

}

function ItemCreator({ }: Props) {
  const classes = useStyles()
  const [type, setType] = useState<Item['type']>()
  const [showEffectAdder, setShowEffectAdder] = useState(true)

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
          <TextField id='armorClass' type='number' label='Armor Class' />
        }
        {true &&
          <>
            <TextField id='damage' type='number' label='Damage' />
            <InputLabel className={classes.rangeLabel}>Range</InputLabel>
            <div className={classes.range}>
              <TextField id='rangeShort' type='number' label='Short' />
              <TextField id='rangeMedium' type='number' label='Medium' />
              <TextField id='rangeLong' type='number' label='Long' />
            </div>
          </>
        }
        {showEffectAdder &&
          <ItemEffectEditor type="armor" />
        }
        <Button onClick={() => setShowEffectAdder(prev => !prev)}>{showEffectAdder ? 'Cancel' : 'New Effect'}</Button>
        <Button type="submit">Submit</Button>
      </form>
      <form id='effectForm'></form>
    </div>
  )
}

type SubProps = {
  type: Item['type']
}

const useSubStyles = createUseStyles((theme: Theme) => ({
  effects: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    gridColumnGap: '1rem'
  },
  radio: {
    flexDirection: 'row'
  }
}))

function ItemEffectEditor({ type }: SubProps) {
  const classes = useSubStyles()

  return (
    <div className={classes.effects} >
      {/* <h3>Effects</h3> */}
      <FormControl required>
        <InputLabel htmlFor='method'>Method</InputLabel>
        <Select inputProps={{ id: 'method', form: 'effectForm' }}>
          <option value='override'>Override</option>
          <option value='modify'>Modify</option>
        </Select>
      </FormControl>
      <FormControl required>
        <InputLabel htmlFor='effectTarget'>Effect Target</InputLabel>
        <Select inputProps={{ id: 'effectTarget', form: 'effectForm' }}>
          <option value='baseAC'>Base AC</option>
          <option value='rangedAC'>Ranged AC</option>
          <option value='withoutShieldAC'>Without Shield AC</option>
          <option value='surprisedAC'>Surprised AC</option>
        </Select>
      </FormControl>
      <TextField id='value' label='Value' type='number' required inputProps={{ form: 'effectForm' }} />
      <Button type="submit" form='effectForm' variant="outlined">Add</Button>
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

// const bar: ArmorEffect = {
//   method: "modify",
//   type: "weaponItemEffect",

// }


export default ItemCreator