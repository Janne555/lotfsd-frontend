import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  NoData: {
    
  }
}))

type Props = {

}

function NoData({}: Props) {
  const classes = useStyles()
  return (
    <div className={classes.NoData}>
    </div>
  )
}

export default NoData