import { useAppSelector } from './app/hooks'
import { Card } from './components/Card/Card'
import { Modal } from './components/Modal/Modal'
import { useGetCharactersQuery } from './slices/RickAndMortyApi/RickAndMortyApi'

import { characterType } from './types/characterType'
import { receivedCharacterType } from './types/receivedCharacterType'

function App() {
  const { data, isFetching, isError } = useGetCharactersQuery(1)
  const modalInfo: { character: characterType } = useAppSelector(
    (state) => state.Modal
  )
  const modalCharacter = modalInfo.character

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

  return (
    <>
      <h1>Rick and Morty Universe</h1>
      <Modal character={modalCharacter} />
      {allCharacters.map((character: characterType) => (
        <div key={character.id}>
          <Card character={character} />
        </div>
      ))}
    </>
  )
}

export default App
