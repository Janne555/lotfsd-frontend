import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks'
import { selectCommonActivities } from '../../Redux/selectors'
import DieFace from '../_shared/DieFace'
import { hasKey } from '../../services'
import { COMMON_ACTIVITY_TITLES } from '../../constants'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    textAlign: 'center'
  },
  activities: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}))

function CommonActivities() {
  const classes = useStyles()
  const commonActivities = useSelector(selectCommonActivities)

  return (
    <div className={classes.root}>
      <h2>Common Activities</h2>
      <div className={classes.activities}>
        {
          Object.entries(commonActivities).map(([name, value]) => (
            hasKey(commonActivities, name) && <Activity title={COMMON_ACTIVITY_TITLES[name]} value={value} />
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

function Activity({ title, value }: { title: string, value: number }) {
  const classes = useSubStyles()
  return (
    <div className={classes.root}>
      <h4>{title}</h4>
      <DieFace value={value} />
    </div>
  )
}

export default CommonActivities