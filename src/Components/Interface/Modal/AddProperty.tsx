import React from 'react'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import { generate } from 'shortid'
import { useMutation } from '@apollo/react-hooks'
import { CharacterSheetQuery, CharacterSheetQueryVariables } from '../../../../__generated__/apolloTypes/CharacterSheetQuery'
import { AddPropertyMutation, AddPropertyMutationVariables } from '../../../../__generated__/apolloTypes/AddPropertyMutation'
import { ADD_PROPERTY_MUTATION, CHARACTER_SHEET_QUERY } from '../../../constants'
import { PropertyInput } from '../../../../__generated__/apolloTypes/globalTypes'

type Props = {
  onClose: () => void
  characterId: string
}

const AddProperty = React.forwardRef<HTMLFormElement, Props>(function AddProperty({ onClose, characterId }: Props, ref) {
  const [mutate, { data, loading, error }] = useMutation<AddPropertyMutation, AddPropertyMutationVariables>(ADD_PROPERTY_MUTATION, {
    update: (cache, { data }) => {
      if (data && characterId) {
        cache.writeQuery<CharacterSheetQuery, CharacterSheetQueryVariables>({
          data: { characterSheet: data.addProperty },
          query: CHARACTER_SHEET_QUERY,
          variables: { id: characterId }
        })
      }
    },
    onCompleted: onClose
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const target = (e.target as unknown) as { elements: AddPropertyForm }
    let property: PropertyInput = {
      description: target.elements.description.value,
      location: target.elements.location.value,
      name: target.elements.name.value
    }

    if (target.elements.value.value) {
      property.value = Number(target.elements.value.value)
    }

    if (target.elements.rent.value) {
      property.rent = Number(target.elements.rent.value)
    }

    mutate({
      variables: {
        characterSheetId: characterId,
        property
      }
    })
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