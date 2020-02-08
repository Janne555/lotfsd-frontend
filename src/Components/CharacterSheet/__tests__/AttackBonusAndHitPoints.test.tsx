import React from 'react'
import { JssProvider } from 'react-jss'
import { render, waitForDomChange, fireEvent } from '@testing-library/react'
import { MockedProvider, wait, MockedResponse } from '@apollo/react-testing'
import { MemoryRouter } from 'react-router-dom'
import { LoginProvider } from '../../../hooks'
import { CHARACTER_SHEET_UPDATE_MOCK } from '../../../testdata'
import AttackBonusAndHitPoints from '../AttackBonusAndHitPoints'
import * as hooks from '../../../hooks'
import { CHARACTER_SHEET_UPDATE_MUTATION } from '../../../constants'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

jest.spyOn(hooks, "useScreenResizeEvent").mockImplementation(() => false)

const mocks: MockedResponse[] = [
  {
    request: {
      query: CHARACTER_SHEET_UPDATE_MUTATION,
      variables: { "ch": { "surpriseChance": 6 }, "id": "asd" }
    },
    result: CHARACTER_SHEET_UPDATE_MOCK
  },
  {
    request: {
      query: CHARACTER_SHEET_UPDATE_MUTATION,
      variables: { "ch": { "maxHp": 15 }, "id": "asd" }
    },
    result: CHARACTER_SHEET_UPDATE_MOCK
  },
  {
    request: {
      query: CHARACTER_SHEET_UPDATE_MUTATION,
      variables: { "ch": { "currentHp": 15 }, "id": "asd" }
    },
    result: CHARACTER_SHEET_UPDATE_MOCK
  }
]

describe('<AttackBonusAndHitPoints />', () => {
  it('should update surprise chance', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginProvider>
          <MockedProvider mocks={mocks}>
            <JssProvider disableStylesGeneration>
              <AttackBonusAndHitPoints characterId="asd" baseAB={5} meleeAB={5} rangedAB={5} maxHp={10} currentHp={10} surpriseChance={4} />
            </JssProvider>
          </MockedProvider>
        </LoginProvider>
      </MemoryRouter>
    )

    fireEvent.click(getByTestId("surprise-circle-5"))

    await act(async () => {
      await wait(1)
    })
  });

  it('should update max hp', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginProvider>
          <MockedProvider mocks={mocks}>
            <JssProvider disableStylesGeneration>
              <AttackBonusAndHitPoints characterId="asd" baseAB={5} meleeAB={5} rangedAB={5} maxHp={10} currentHp={10} surpriseChance={4} />
            </JssProvider>
          </MockedProvider>
        </LoginProvider>
      </MemoryRouter>
    )

    userEvent.type(getByTestId("max-hp"), "15")
    fireEvent.blur(getByTestId("max-hp"))

    await act(async () => {
      await wait(1)
    })
  });

  it('should update current hp', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginProvider>
          <MockedProvider mocks={mocks}>
            <JssProvider disableStylesGeneration>
              <AttackBonusAndHitPoints characterId="asd" baseAB={5} meleeAB={5} rangedAB={5} maxHp={10} currentHp={10} surpriseChance={4} />
            </JssProvider>
          </MockedProvider>
        </LoginProvider>
      </MemoryRouter>
    )

    userEvent.type(getByTestId("current-hp"), "15")
    fireEvent.blur(getByTestId("current-hp"))

    await act(async () => {
      await wait(1)
    })
  });
});