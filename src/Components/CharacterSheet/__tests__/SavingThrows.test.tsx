import React from 'react'
import { SAVING_THROW_TITLES } from '../../../constants'
import { renderWrapped } from '../../../setupTests'
import SavingThrows from '../SavingThrows'

const SAVING_THROWS: SavingThrowsWithModifications = {
  breathWeapon: { base: 1, modified: 2 },
  magic: { base: 3, modified: 4 },
  magicalDevice: { base: 5, modified: 6 },
  paralyze: { base: 7, modified: 8 },
  poison: { base: 9, modified: 10 }
}

describe('<SavingThrows />', () => {
  it.each(Object.values(SAVING_THROW_TITLES).map(title => title.replace(/\s/g, '')))(
    'expect title "%s" to be in the document',
    (title) => {
      const { queryByText } = renderWrapped(<SavingThrows savingThrows={SAVING_THROWS} />)
      expect(queryByText(text => text.replace(/\s/g, '') === title)).toBeInTheDocument()
    }
  );

  it.each(["2", "4", "6", "8", "10"])(
    'expect value "%s" to be in the document',
    (value) => {
      const { queryByDisplayValue } = renderWrapped(<SavingThrows savingThrows={SAVING_THROWS} />)
      expect(queryByDisplayValue(value)).toBeInTheDocument()
    }
  );
})
