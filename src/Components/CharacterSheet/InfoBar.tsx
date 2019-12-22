import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector, useCharacterContext } from '../../hooks'
import { selectInfo } from '../../Redux/selectors'

const useStyles = createUseStyles((theme: Theme) => ({
  infoBarRoot: {
    height: 100,
    backgroundColor: theme.componentBackgroundColor,
    border: theme.border,
    padding: theme.padding,
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    columnSpan: 'all'
  },
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
    alignItems: 'center'
  },
  left: {
    textAlign: 'right',
    marginRight: '0.5em',
    fontWeight: 'bold',
    fontSize: '1.1em'
  },
  right: {
    textAlign: 'left',
    marginLeft: '0.5em'
  }
}))

function InfoBar() {
  const classes = useStyles()
  const { characterId } = useCharacterContext()
  const { id, ...info } = useSelector(selectInfo(characterId))

  return (
    <div className={classes.infoBarRoot}>
      <h1>Lamentations of the fullstack developer</h1>
      <div className={classes.info}>
        {
          Object.entries(info).map(([key, value]) => (
            <>
              <span className={classes.left}>{key}</span>
              <span className={classes.right}>{value}</span>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default InfoBar