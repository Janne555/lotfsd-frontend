import React from 'react'
import { createUseStyles } from 'react-jss'
import Modal from '@material-ui/core/Modal'
import AddRetainer from './AddRetainer'
import AddLanguage from './AddLanguage'
import NoContent from '../../_shared/NoContent'
import AddItem from './AddItem'
import { useHistory } from 'react-router-dom'

const useStyles = createUseStyles((theme: Theme) => ({
  modal: {
    outline: 'none',
    width: 'fit-content'
  },
  '@media (max-width: 1100px)': {
    modal: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white'
    }
  }
}))

type Props = {
  characterId?: string
  content?: string
  characterName?: string
}

const AppModal = React.forwardRef<any, Props>(function AppModal({ characterId, content, characterName }, ref) {
  const classes = useStyles()
  const history = useHistory()

  function handleClose() {
    history.push(`/characters/${characterName}`)
  }

  return (
    <Modal
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      open={Boolean(content)}
      onClose={handleClose}
    >
      <div className={classes.modal}>
        {characterId &&
          (() => {
            switch (content) {
              case "addRetainer":
                return <AddRetainer ref={ref} characterId={characterId} onClose={handleClose} />
              case "addLanguage":
                return <AddLanguage ref={ref} characterId={characterId} onClose={handleClose} />
              case "addItem":
                return <AddItem ref={ref} characterId={characterId} onClose={handleClose} />
              default:
                return <NoContent />
            }
          })()
        }
      </div>
    </Modal>
  )
})

export default AppModal