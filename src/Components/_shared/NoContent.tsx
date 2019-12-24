import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme: Theme) => ({
  noContent: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  }
}))

type Props = {

}

function NoContent(/* {}: Props */) {
  const classes = useStyles()
  return (
    <div className={classes.noContent}>
      No Content
    </div>
  )
}

export default NoContent