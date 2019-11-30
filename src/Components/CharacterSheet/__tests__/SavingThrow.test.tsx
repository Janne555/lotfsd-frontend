import React from 'react'
import { render } from '@testing-library/react'
import SavingThrow from '../SavingThrow'
import { SAVING_THROW_TITLES } from '../../../constants'

describe('<SavingThrow />', () => {
  it('should display the title', () => {
    const { queryByText, debug } = render(<SavingThrow index={0} title="paralyze" value={15} />)
    expect(queryByText(SAVING_THROW_TITLES.paralyze)).toBeInTheDocument()
  });

  it('should display the value', () => {
    const { queryByText, debug } = render(<SavingThrow index={0} title="paralyze" value={15} />)
    expect(queryByText("15")).toBeInTheDocument()
  });
})
