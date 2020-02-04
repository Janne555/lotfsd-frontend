import React from 'react'
import { createUseStyles } from 'react-jss'
import DieFace from '../_shared/DieFace'
import { isKeyOfCommonActivities, updateCharacterSheet } from '../../services'
import { COMMON_ACTIVITY_TITLES, CHARACTER_SHEET_UPDATE_MUTATION } from '../../constants'
import { useMutation } from '@apollo/react-hooks'
import { CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables } from '../../../__generated__/apolloTypes/CharacterSheetUpdateMutation'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    border: theme.border,
    padding: `${theme.padding}px 20px`,
    backgroundColor: theme.componentBackgroundColor
  },
  activities: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}))

type Props = {
  commonActivities: CommonActivitiesWithModifications
  characterId?: string
}

function CommonActivities({ commonActivities, characterId }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2>Common Activities</h2>
      <div className={classes.activities}>
        {
          Object.entries(commonActivities).map(([name, { base, modified }]) => (
            isKeyOfCommonActivities(name) && <Activity key={name} name={name} base={base} modified={modified} characterId={characterId} />
          ))
        }
      </div>
    </div>
  )
}

const useSubStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    width: 100
  }
})

type SubProps = {
  name: keyof CommonActivities
  base: number
  modified: number
  characterId?: string
}

function Activity({ name, base, modified, characterId }: SubProps) {
  const classes = useSubStyles()
  const [mutate, { loading }] = useMutation<CharacterSheetUpdateMutation, CharacterSheetUpdateMutationVariables>(CHARACTER_SHEET_UPDATE_MUTATION, {
    update: updateCharacterSheet(characterId)
  })

  function handleChange(value: number) {
    if (characterId) {
      mutate({
        variables: {
          ch: { [name]: value },
          id: characterId
        }
      })
    }
  }

  return (
    <div className={classes.root}>
      <h4>{COMMON_ACTIVITY_TITLES[name]}</h4>
      <DieFace value={modified} onValueChange={handleChange} loading={loading} />
    </div>
  )
}

export default CommonActivities