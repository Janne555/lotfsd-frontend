const modalVisible = (state: RootState): boolean => state.userInterface.modalOpen
const modalContent = (state: RootState): ModalContent | undefined => state.userInterface.modalContent

export {
  modalVisible as selectModalVisible,
  modalContent as selectModalContent
}