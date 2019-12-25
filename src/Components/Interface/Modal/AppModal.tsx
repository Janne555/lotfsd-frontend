import React from 'react'
import { createUseStyles } from 'react-jss'
import Modal from '@material-ui/core/Modal'
import AddRetainer from './AddRetainer'
import AddLanguage from './AddLanguage'
import { useSelector, useDispatch } from '../../../hooks'
import { selectModalVisible, selectModalContent } from '../../../Redux/selectors/userInterface'
import NoContent from '../../_shared/NoContent'
import { closeModal } from '../../../Redux/actions'
import AddItem from './AddItem'

const useStyles = createUseStyles((theme: Theme) => ({
  modal: {
    outline: 'none',
    width: 'fit-content'
  }
}))

type Props = {
  characterId?: string
}

const AppModal = React.forwardRef<any, Props>(function AppModal({ characterId }, ref) {
  const classes = useStyles()
  const visible = useSelector(selectModalVisible)
  const content = useSelector(selectModalContent)
  const dispatch = useDispatch()

  function handleClose() {
    dispatch(closeModal())
  }

  return (
    <Modal
      open={visible}
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