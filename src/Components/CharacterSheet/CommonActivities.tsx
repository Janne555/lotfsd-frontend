import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks'
import { selectCommonActivities } from '../../Redux/selectors'
import DieFace from '../_shared/DieFace'
import { hasKey } from '../../services'
import { COMMON_ACTIVITY_TITLES } from '../../constants'

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
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
      {
        Object.entries(commonActivities).map(([name, value]) => (
          hasKey(commonActivities, name) && <Foo title={COMMON_ACTIVITY_TITLES[name]} value={value} />
        ))
      }
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

function Foo({ title, value }: { title: string, value: number }) {
  const classes = useSubStyles()
  return (
    <div className={classes.root}>
      <h4>{title}</h4>
      <DieFace value={value} />
    </div>
  )
}

export default CommonActivities