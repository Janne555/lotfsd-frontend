import React from 'react'
import { render } from '@testing-library/react'
import Attribute from '../Attribute'
import * as hooks from '../../../hooks/redux'
import userEvent from '@testing-library/user-event'

describe('<Attribute />', () => {
  const mockDispatch = jest.fn()
  const mockUseDispatch = jest.spyOn(hooks, 'useDispatch').mockImplementation((): any => mockDispatch)

  afterEach(mockUseDispatch.mockClear)

  it('should display a value', () => {
    const { queryByLabelText } = render(<Attribute index={1} score={15} title="charisma" />)
    expect(queryByLabelText("charisma")).toHaveAttribute("value", "15")
  });

  it('should send action when changing value', () => {
    const { getByLabelText } = render(<Attribute index={1} score={15} title="charisma" />)
    userEvent.type(getByLabelText("charisma"), "20")
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  });
})
