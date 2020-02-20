import React from 'react'
import { renderWrapped } from '../../../setupTests'
import AttackBonus from '../AttackBonus'

describe('<AttackBonus />', () => {
  it('should display the values', () => {
    const { queryByText, queryByDisplayValue } = renderWrapped(<AttackBonus baseAB={111} meleeAB={222} rangedAB={333} />)
    expect(queryByDisplayValue("111")).toBeInTheDocument()
    expect(queryByText("222")).toBeInTheDocument()
    expect(queryByText("333")).toBeInTheDocument()
  })
})