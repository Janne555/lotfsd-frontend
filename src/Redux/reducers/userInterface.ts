import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  modalOpen: boolean
  modalContent?: ModalContent
}

const initialState: InitialState = {
  modalOpen: false,
  modalContent: undefined
}

const { actions, reducer } = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    openModalWith(state, action: PayloadAction<ModalContent>) {
      state.modalContent = action.payload
      state.modalOpen = true
    },
    closeModal(state) {
      state.modalOpen = false
    }
  }
})

export const { openModalWith, closeModal } = actions

export default reducer