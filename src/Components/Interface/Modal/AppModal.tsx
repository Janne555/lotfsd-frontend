import React from 'react'
import { createUseStyles } from 'react-jss'
import Modal from '@material-ui/core/Modal'
import AddRetainer from './AddRetainer'
import { useSelector, useDispatch } from '../../../hooks'
import { selectModalVisible, selectModalContent } from '../../../Redux/selectors/userInterface'
import NoContent from '../../_shared/NoContent'
import DialogContent from '@material-ui/core/DialogContent'
import { closeModal } from '../../../Redux/actions'

const useStyles = createUseStyles((theme: Theme) => ({
  modal: {

  }
}))

const content = {
  addRetainer: AddRetainer
}

type ContentProps = {
  option: ModalContent
  onClose: () => void
}

function Content({ option, onClose }: ContentProps) {
  return content[option]({ onClose })
}

type Props = {

}

const AppModal = React.forwardRef(({ }, ref) => {
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
      <DialogContent>
        {content
          ? <Content option={content} onClose={handleClose} />
          : <NoContent />
        }
      </DialogContent>
    </Modal>
  )
})

export {
  content as T_content
}

export default AppModal