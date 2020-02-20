import React from 'react'
import { JssProvider } from 'react-jss'
import { render, fireEvent } from '@testing-library/react'
import { MockedProvider, wait, MockedResponse } from '@apollo/react-testing'
import { MemoryRouter } from 'react-router-dom'
import { LoginProvider } from '../../hooks'
import CharacterCreator from './CharacterCreator'
import userEvent from '@testing-library/user-event'
import { writeComponent } from '../../testUtils'
import { APOLLO_MOCKS } from '../../testdata'
import { CREATE_CHARACTER_MUTATION, CHARACTER_LIST_QUERY } from '../../constants'
import { InMemoryCache } from 'apollo-boost'
import { act } from 'react-dom/test-utils'
import { CharacterListQuery } from '../../../__generated__/apolloTypes/CharacterListQuery'

describe('<CharacterCreator />', () => {
  it('should match snapshot', async () => {
    const { asFragment } = render(
      <MemoryRouter>
        <LoginProvider>
          <MockedProvider mocks={[]}>
            <JssProvider disableStylesGeneration>
              <CharacterCreator />
            </JssProvider>
          </MockedProvider>
        </LoginProvider>
      </MemoryRouter>
    )

    expect(asFragment()).toMatchSnapshot()
  });

  it('should create a character', async () => {
    const newData = jest.fn(() => ({
      data: {
        createCharacterSheet: {
          __typename: "CharacterSheet",
          class: "Cleric",
          name: "Zoid",
          id: "asd"
        }
      }
    }))

    const mocks: MockedResponse[] = [
      {
        request: {
          query: CREATE_CHARACTER_MUTATION,
          variables: { "characterSheet": { "charisma": 10, "dexterity": 12, "intelligence": 13, "strength": 14, "wisdom": 15, "constitution": 11, "copper": 0, "gold": 0, "silver": 100, "alignment": "chaotic", "class": "fighter", "gender": "Male", "name": "Zoid", "race": "Crab", "age": 20, "maxHp": 10, "attackBonus": 1, "currentHp": 10, "experience": 0, "surpriseChance": 4, "defensive": true, "improvedParry": true, "press": true, "standard": true, "parry": false, "architecture": 1, "bushcraft": 1, "climbing": 1, "languages": 1, "openDoors": 1, "search": 1, "sleightOfHand": 1, "sneakAttack": 1, "stealth": 1, "tinkering": 1, "breathWeapon": 10, "magic": 11, "magicalDevice": 12, "paralyze": 13, "poison": 14 } }
        },
        result: {
          data: {
            createCharacterSheet: {
              __typename: "CharacterSheet",
              class: "Cleric",
              name: "Zoid",
              id: "asd"
            }
          }
        },
        newData
      }
    ]

    const cache = new InMemoryCache()

    cache.writeQuery<CharacterListQuery, string>({
      query: CHARACTER_LIST_QUERY,
      data: {
        characterSheets: []
      }
    })

    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <LoginProvider>
          <MockedProvider mocks={mocks} cache={cache} >
            <JssProvider disableStylesGeneration>
              <CharacterCreator />
            </JssProvider>
          </MockedProvider>
        </LoginProvider>
      </MemoryRouter>
    )

    userEvent.type(getByLabelText("Charisma"), "10")
    userEvent.type(getByLabelText("Constitution"), "11")
    userEvent.type(getByLabelText("Dexterity"), "12")
    userEvent.type(getByLabelText("Intelligence"), "13")
    userEvent.type(getByLabelText("Strength"), "14")
    userEvent.type(getByLabelText("Wisdom"), "15")
    userEvent.type(getByLabelText(/Name/), "Zoid")
    userEvent.type(getByLabelText(/Gender/), "Male")
    userEvent.type(getByLabelText(/Race/), "Crab")
    userEvent.type(getByLabelText(/Age/), "20")
    userEvent.type(getByLabelText(/Money/), "100")
    userEvent.type(getByLabelText(/HP/), "10")
    fireEvent.click(getByText("Create"))

    await act(async () => {
      await wait(100)
    })

    expect(newData).toHaveBeenCalled()
  });
});