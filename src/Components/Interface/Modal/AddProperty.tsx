import React from 'react'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import { generate } from 'shortid'

type Props = {
  onClose: () => void
  characterId: string
}

const AddProperty = React.forwardRef<HTMLFormElement, Props>(function AddProperty({ onClose, characterId }: Props, ref) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = (e.target as unknown) as { elements: AddPropertyForm }
    let property: Property & CharacterId = {
      characterId,
      description: target.elements.description.value,
      id: generate(),
      inventory: [],
      location: target.elements.location.value,
      name: target.elements.name.value
    }

    if (target.elements.value.value) {
      property.value = Number(target.elements.value.value)
    }

    if (target.elements.rent.value) {
      property.rent = Number(target.elements.rent.value)
    }

    throw Error("TODO")
    onClose()
  }

  return (
    <FormContainer ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add property">
      <TextField id="name" label="Name" required />
      <TextField id="location" label="Location" required />
      <TextField id="value" label="Value" type="number" />
      <TextField id="rent" label="Rent" type="number" />
      <TextField id="description" label="Description" multiline />
    </FormContainer>
  )
})

export default AddProperty