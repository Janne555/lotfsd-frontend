import React from 'react'
import { renderWrapped } from '../../../setupTests'
import AttackBonus from '../AttackBonus'

describe('<AttackBonus />', () => {
  it.each([["0"], ["1"], ["2"]])(
    'show the correct values (%d)',
    (input) => {
      const { queryByText } = renderWrapped(<AttackBonus />)
      expect(queryByText(input)).toBeInTheDocument()
    }
  );
});