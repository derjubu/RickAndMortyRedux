import { Provider } from 'react-redux'
import { useAppSelector } from './app/hooks'
import { Card } from './components/Card/Card'
import { Modal } from './components/Modal/Modal'
import { useGetCharactersQuery } from './slices/RickAndMortyApi/RickAndMortyApi'
import { store } from './app/store'

import { characterType } from './types/characterType'
import { receivedCharacterType } from './types/receivedCharacterType'
import { useState } from 'react'
import { Menu } from './components/Menu/Menu'

function App() {
  const { data, isFetching, isError } = useGetCharactersQuery(1)
  const modalInfo: { character: characterType } = useAppSelector(
    (state) => state.Modal
  )
  const modalCharacter = modalInfo.character

  const charFilter: boolean = useAppSelector((state) => state.Filter)

  const favouritesNumbers: number[] = useAppSelector(
    (state) => state.Favourites
  )

  if (isFetching) {
    return <div>Please wait while fetching data</div>
  }

  if (isError) {
    return <div>Ooops, something went wrong</div>
  }

  const receivedCharacters: receivedCharacterType[] = data.results

  //map received characters to new array in order to better display the status
  function mapToCharacters(characterArray: receivedCharacterType[]) {
    const characterData = characterArray.map(
      (character: receivedCharacterType) => {
        return { ...character, status: character.status === 'Alive' }
      }
    )
    return characterData
  }
  const allCharacters = mapToCharacters(receivedCharacters)

  const filteredChars = allCharacters.filter((char) =>
    favouritesNumbers.includes(char.id)
  )

  const charsToMap = charFilter ? filteredChars : allCharacters
  const filterText = charFilter ? 'Show all' : 'Show favourites'

  return (
    <Provider store={store}>
      <>
        <Menu charFiltered={charFilter} />
        <Modal character={modalCharacter} />
        <ul>
          {charsToMap.map((character: characterType) => (
            <Card character={character} key={character.id} />
          ))}
        </ul>
      </>
    </Provider>
  )
}

export default App
