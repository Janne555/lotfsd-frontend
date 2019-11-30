import React from 'react'
import { SAVING_THROW_TITLES } from '../../../constants'
import { renderWrapped } from '../../../setupTests'
import SavingThrows from '../SavingThrows'
import { savingThrows } from '../../../testData/initialState'

describe('<SavingThrows />', () => {
  it.each(Object.values(SAVING_THROW_TITLES).map(title => title.replace(/\s/g, '')))(
    'expect title "%s" to be in the document',
    (title) => {
      const { queryByText } = renderWrapped(<SavingThrows />)
      expect(queryByText(text => text.replace(/\s/g, '') === title)).toBeInTheDocument()
    }
  );

  it.each(["11", "12", "13", "14", "15"])(
    'expect value "%s" to be in the document',
    (value) => {
      const { queryByText } = renderWrapped(<SavingThrows />)
      expect(queryByText(value)).toBeInTheDocument()
    }
  );
})
