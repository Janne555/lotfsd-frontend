import React from 'react'
import { renderWrapped } from '../../../setupTests'
import Encumbrance from '../Encumbrance'

describe('<Encumbrance />', () => {
  it('should show correct values', () => {
    const { queryByText, queryAllByText } = renderWrapped(<Encumbrance />)
    expect(queryAllByText('90 feet').length).toBe(2)
    expect(queryByText('30 feet')).toBeInTheDocument()
    expect(queryByText('18 miles')).toBeInTheDocument()
    expect(queryByText('2')).toBeInTheDocument()
    expect(queryByText('Lightly Encumbered')).toBeInTheDocument()
  });
});