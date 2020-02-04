import React, { useEffect } from 'react'
import FormContainer from '../../_shared/FormContainer'
import TextField from '@material-ui/core/TextField'
import CheckBox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useMutation } from '@apollo/react-hooks'
import { ADD_LANGUAGE_MUTATION, CHARACTER_SHEET_QUERY } from '../../../constants'
import { AddLanguageMutation, AddLanguageMutationVariables } from '../../../../__generated__/apolloTypes/AddLanguageMutation'
import { CharacterSheetQuery, CharacterSheetQueryVariables } from '../../../../__generated__/apolloTypes/CharacterSheetQuery'

type Props = {
  onClose: () => void
  characterId: string
}

const AddLanguage = React.forwardRef<HTMLFormElement, Props>(function AddLanguage({ onClose, characterId }, ref) {
  const [mutate, { loading, error, called }] = useMutation<AddLanguageMutation, AddLanguageMutationVariables>(ADD_LANGUAGE_MUTATION, {
    update: (cache, { data }) => {
      if (data && characterId) {
        cache.writeQuery<CharacterSheetQuery, CharacterSheetQueryVariables>({
          data: { characterSheet: data.addLanguage },
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
  }, [loading, called, error, onClose])

  function handleSubmit(e: any) {
    e.preventDefault()
    mutate({
      variables: {
        characterId,
        language: {
          name: e.target.elements.name.value,
          known: e.target.elements.known.checked
        }
      }
    })
    onClose()
  }

  return (
    <FormContainer disabled={loading} ref={ref} onClose={onClose} onSubmit={handleSubmit} label="Add Language" loading={loading} error={error?.message}>
      <TextField id="name" label="Name" required />
      <FormControlLabel control={
        <CheckBox inputProps={{ id: 'known' }} />
      } label="Known" />
    </FormContainer >
  )
})

export default AddLanguage