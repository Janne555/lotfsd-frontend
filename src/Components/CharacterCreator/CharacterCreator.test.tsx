import React from 'react'
import { JssProvider } from 'react-jss'
import { render, waitForDomChange } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import { MemoryRouter } from 'react-router-dom'
import { LoginProvider } from '../../hooks'
import CharacterCreator from './CharacterCreator'

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

  it.todo('should create a character');
});