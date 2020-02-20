import React from 'react'
import SavingThrow from '../SavingThrow'
import { SAVING_THROW_TITLES } from '../../../constants'
import { renderWrapped } from '../../../setupTests'

describe('<SavingThrow />', () => {
  it('should display the title', () => {
    const { queryByText } = renderWrapped(<SavingThrow values={{base: 1, modified: 2}} name="paralyze" />)
    expect(queryByText(SAVING_THROW_TITLES.paralyze)).toBeInTheDocument()
  });

  it('should display the value', () => {
    const { queryByDisplayValue } = renderWrapped(<SavingThrow values={{base: 1, modified: 2}} name="paralyze" />)
    expect(queryByDisplayValue("2")).toBeInTheDocument()
  });
})
