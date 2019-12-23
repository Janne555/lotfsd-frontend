import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useCharacterContext, useDispatch } from '../../hooks'
import { selectCommonActivities } from '../../Redux/selectors'
import DieFace from '../_shared/DieFace'
import { hasKey } from '../../services'
import { COMMON_ACTIVITY_TITLES } from '../../constants'
import { setCommonActivityValue } from '../../Redux/actions'

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

function CommonActivities() {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const commonActivities = useSelector(selectCommonActivities(characterId))

  return (
    <div className={classes.root}>
      <h2>Common Activities</h2>
      <div className={classes.activities}>
        {
          Object.entries(commonActivities).map(([name, { base, modified }]) => (
            hasKey(commonActivities, name) && <Activity key={name} name={name} base={base} modified={modified} />
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
  const dispatch = useDispatch()
  const { characterId } = useCharacterContext()

  function handleChange(value: number) {
    dispatch(setCommonActivityValue({ activity: name, id: characterId, value: value - (modified - base) }))
  }

  return (
    <div className={classes.root}>
      <h4>{COMMON_ACTIVITY_TITLES[name]}</h4>
      <DieFace value={modified} onValueChange={handleChange} />
    </div>
  )
}

export default CommonActivities