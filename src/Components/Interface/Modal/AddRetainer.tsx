import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from '../../../hooks'
import { addRetainer } from '../../../Redux/thunks'
import FormContainer from '../../_shared/FormContainer'
import { AddRetainerMutation, AddRetainerMutationVariables } from '../../../../__generated__/apolloTypes/AddRetainerMutation'
import { ADD_RETAINER_MUTATION, CHARACTER_SHEET_QUERY } from '../../../constants'
import { useMutation } from '@apollo/react-hooks'
import { CharacterSheetQuery, CharacterSheetQueryVariables } from '../../../../__generated__/apolloTypes/CharacterSheetQuery'

type Props = {
  onClose: () => void
  characterId: string
}

function gatherRetainerVariables(elements: AddRetainerForm): AddRetainerMutationVariables["retainer"] {
  const name = elements.name.value
  const className = elements.class.value ?? undefined
  const hitpoints = elements.hitpoints.value ? Number(elements.hitpoints.value) : undefined
  const level = elements.level.value ? Number(elements.level.value) : undefined
  const position = elements.position.value ?? undefined
  const share = elements.share.value ? Number(elements.share.value) : undefined
  const wage = elements.wage.value ? Number(elements.wage.value) : undefined

  return {
    name,
    class: className,
    hitpoints,
    level,
    position,
    share,
    wage
  }
}


const AddRetainer = React.forwardRef<HTMLFormElement, Props>(function AddRetainer({ onClose, characterId }, ref) {
  const [mutate, { data, loading, error, called }] = useMutation<AddRetainerMutation, AddRetainerMutationVariables>(ADD_RETAINER_MUTATION, {
    update: (cache, { data }) => {
      if (data && characterId) {
        cache.writeQuery<CharacterSheetQuery, CharacterSheetQueryVariables>({
          data: { characterSheet: data.addRetainer },
          query: CHARACTER_SHEET_QUERY,
          variables: { id: characterId }
        })
      }
    }
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (called) {
      console.debug("tried to add retainer twice")
      return
    }

    const target = (e.target as unknown) as { elements: AddRetainerForm }
    mutate({
      variables: {
        characterId,
        retainer: gatherRetainerVariables(target.elements)
      }
    })
    onClose()
  }

  return (
    <FormContainer ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Retainer">
      <TextField id="name" label="Name" required autoFocus />
      <TextField id="position" label="Position" />
      <TextField id="class" label="Class" />
      <TextField id="level" label="Level" type="number" />
      <TextField id="hitpoints" label="Hitpoints" type="number" />
      <TextField id="wage" label="Wage" type="number" />
      <TextField id="share" label="Share" type="number" />
    </FormContainer>
  )
})

export default AddRetainer