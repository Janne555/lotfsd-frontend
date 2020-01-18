import React from 'react'
import { createUseStyles } from 'react-jss'
import DieFace from '../_shared/DieFace'
import { hasKey, isKeyOfCommonActivities } from '../../services'
import { COMMON_ACTIVITY_TITLES, CHARACTER_SHEET_UPDATE, CHARACTER_SHEET_QUERY } from '../../constants'
import { useMutation } from '@apollo/react-hooks'
import { CharacterSheetUdpate, CharacterSheetUdpateVariables } from '../../constants/mutations/__generated__/CharacterSheetUdpate'
import { CharacterSheetQuery } from '../../constants/queries/__generated__/CharacterSheetQuery'

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
}

function CommonActivities({ commonActivities }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2>Common Activities</h2>
      <div className={classes.activities}>
        {
          Object.entries(commonActivities).map(([name, { base, modified }]) => (
            isKeyOfCommonActivities(name) && <Activity key={name} name={name} base={base} modified={modified} />
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
}

function Activity({ name, base, modified }: SubProps) {
  const classes = useSubStyles()
  const [mutate, { loading }] = useMutation<CharacterSheetUdpate, CharacterSheetUdpateVariables>(CHARACTER_SHEET_UPDATE, {
    update(cache, { data }) {
      if (data) {
        let { characterSheet } = cache.readQuery<CharacterSheetQuery>({ query: CHARACTER_SHEET_QUERY }) ?? {}
        if (!characterSheet) {
          throw Error("Tried to udpate character sheet when it doesn't exist")
        }

        cache.writeQuery<CharacterSheetQuery, string>({
          query: CHARACTER_SHEET_QUERY,
          data: { characterSheet: characterSheet }
        })
      }
    }
  })

  function handleChange(value: number) {
    throw Error("TODO")
  }

  return (
    <div className={classes.root}>
      <h4>{COMMON_ACTIVITY_TITLES[name]}</h4>
      <DieFace value={modified} onValueChange={handleChange} />
    </div>
  )
}

export default CommonActivities