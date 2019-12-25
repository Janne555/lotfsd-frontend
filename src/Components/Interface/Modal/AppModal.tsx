import React from 'react'
import { createUseStyles } from 'react-jss'
import Modal from '@material-ui/core/Modal'
import AddRetainer from './AddRetainer'
import { useSelector, useDispatch } from '../../../hooks'
import { selectModalVisible, selectModalContent } from '../../../Redux/selectors/userInterface'
import NoContent from '../../_shared/NoContent'
import { closeModal } from '../../../Redux/actions'

const useStyles = createUseStyles((theme: Theme) => ({
  modal: {
    outline: 'none',
    width: 'fit-content'
  }
}))

const content = {
  addRetainer: AddRetainer
}

type ContentProps = {
  option: ModalContent
  onClose: () => void
  characterId: string
}

function Content({ option, onClose, characterId }: ContentProps) {
  return content[option]({ onClose, characterId })
}

type Props = {
  characterId?: string
}

const AppModal = React.forwardRef<any, Props>(({ characterId }, ref) => {
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
        {content && characterId
          ? <Content option={content} onClose={handleClose} characterId={characterId} />
          : <NoContent />
        }
      </div>
    </Modal>
  )
})

export {
  content as T_content
}

export default AppModal