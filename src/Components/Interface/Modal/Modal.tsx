import React from 'react'
import { createUseStyles } from 'react-jss'
import MaterialModal from '@material-ui/core/Modal'
import AddRetainer from './AddRetainer'
import { useSelector, useDispatch } from '../../../hooks'
import { selectModalVisible, selectModalContent } from '../../../Redux/selectors/userInterface'
import NoContent from '../../_shared/NoContent'

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

function Modal({ }: Props) {
  const classes = useStyles()
  const visible = useSelector(selectModalVisible)
  const content = useSelector(selectModalContent)
  const dispatch = useDispatch()

  function handleClose() {

  }

  return (
    <MaterialModal
      open={visible}
      onClose={handleClose}
    >
      {content
        ? <Content option={content} onClose={handleClose} />
        : <NoContent />
      }
    </MaterialModal>
  )
}

export {
  content as T_content
}

export default Modal