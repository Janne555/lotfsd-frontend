import React, { ReactNode } from 'react'
import { JssProvider } from 'react-jss'
import { render, waitForDomChange } from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/react-testing'
import { MemoryRouter } from 'react-router-dom'
import { CHARACTER_LIST_QUERY, ITEMS_QUERY } from './constants'
import Main from './Main'
import { ItemsQuery } from '../__generated__/apolloTypes/ItemsQuery'
import { CharacterListQuery } from '../__generated__/apolloTypes/CharacterListQuery'
import { LoginProvider } from './hooks'

type Result<T> = {
  data: T
}

const CHARACTER_LIST_MOCK: Result<CharacterListQuery> = {
  data: {
    characterSheets: [
      {
        __typename: "CharacterSheet",
        class: "fighter",
        id: "213123",
        name: "zoid"
      }
    ]
  }
}

const ITEM_INDEX_MOCK: Result<ItemsQuery> = {
  data: {
    items: [
      {
        __typename: "Item",
        attackBonus: null,
        baseArmorClass: null,
        damage: null,
        description: "a description",
        effects: null,
        encumbrance: null,
        encumbrancePoints: 1,
        id: "asd",
        name: "thingy",
        rangeLong: null,
        rangeMedium: null,
        rangeShort: null,
        stackSize: 1,
        type: "item"
      }
    ]
  }
}

const mocks: MockedResponse[] = [
  {
    request: {
      query: CHARACTER_LIST_QUERY
    },
    result: CHARACTER_LIST_MOCK
  },
  {
    request: {
      query: ITEMS_QUERY
    },
    result: ITEM_INDEX_MOCK
  }
]

describe('<Main />', () => {
  it('should match snapshot', async () => {
    const { asFragment } = render(
      <MemoryRouter>
        <LoginProvider>
          <MockedProvider mocks={mocks}>
            <JssProvider disableStylesGeneration>
              <Main />
            </JssProvider>
          </MockedProvider>
        </LoginProvider>
      </MemoryRouter>
    )

    await waitForDomChange()

    expect(asFragment()).toMatchSnapshot()
  });
});