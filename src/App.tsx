import { useAppDispatch, useAppSelector } from './app/hooks'
import { Card } from './components/Card/Card'
import { Modal } from './components/Modal/Modal'
import { useGetCharactersQuery } from './slices/RickAndMortyApi/RickAndMortyApi'
import { toggleModal } from './slices/ShowModal/ShowModalSlice'
import { characterType } from './types/characterType'
import { receivedCharacterType } from './types/receivedCharacterType'

function App() {
  const { data, isFetching, isError } = useGetCharactersQuery(1)
  const modalInfo = useAppSelector((state) => state.Modal)
  const isModal = modalInfo.visible
  const modalCharacter = modalInfo.character
  const dispatch = useAppDispatch()
  function openModal(character: characterType) {
    dispatch(toggleModal({ character }))
  }

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
      {isModal ? <Modal character={modalCharacter} /> : null}
      {allCharacters.map((character: characterType) => (
        <div key={character.id}>
          <Card character={character} />
          <button onClick={() => openModal(character)}>
            Open for {character.name}
          </button>
        </div>
      ))}
    </>
  )
}

export default App
