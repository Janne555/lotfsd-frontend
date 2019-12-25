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
import { normalizeCamelCase } from '../../../services'

const useStyles = createUseStyles((theme: Theme) => ({
  AddItem: {

  }
}))

type Props = {
  onClose: () => void
  characterId: string
}

function pickDisplayProps(item: Item): [string, string][] {
  const { description, stackSize, type } = item
  return [
    ['Description', description],
    ['Stack Size', `${stackSize}`],
    ['Type', type]
  ]
}

function displayEffect(effect: ItemEffect) {
  switch (effect.type) {
    case "armorItemEffect":
      return displayArmorEffect(effect)
    case "weaponItemEffect":
      return undefined
    default:
      return undefined
  }

  function displayArmorEffect(acEffect: ArmorEffect) {
    const { method, value, target } = acEffect
    let foo = normalizeCamelCase(target.replace('AC', 'ArmorClass'))

    if (method === "modify") {
      if (value === 0) {
        return undefined
      }
      return `${value > 0 ? 'Increases' : 'Decreases'} ${foo} by ${value}`
    } else {
      return `Replaces ${foo} with ${value}`
    }
  }
}

const AddItem = React.forwardRef<HTMLFormElement, Props>(function AddItem({ characterId, onClose }, ref) {
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
      {selected &&
        <ul>
          {
            pickDisplayProps(selected).map(([key, value]) => (
              <li key={key}>
                <span>{key}: </span>
                <span>{value as any}</span>
              </li>
            ))
          }
          {selected.encumbrance != null &&
            <li>
              Oversized
            </li>
          }
          {
            selected.effects.map((effect, i) => (
              <li key={i}>
                {displayEffect(effect)}
              </li>
            ))
          }
        </ul>
      }
    </FormContainer>
  )
})

export default AddItem