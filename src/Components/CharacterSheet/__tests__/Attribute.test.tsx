import React from 'react'
import Attribute from '../Attribute'
import { ATTRIBUTE_TITLES } from '../../../constants'
import { renderWrapped } from '../../../setupTests'

describe('<Attribute />', () => {
  it('should display a value', () => {
    const { queryByLabelText } = renderWrapped(<Attribute index={1} score={15} title="charisma" />)
    expect(queryByLabelText(ATTRIBUTE_TITLES.charisma)).toHaveAttribute("value", "15")
  });
})
