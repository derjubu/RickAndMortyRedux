import { useAppSelector } from './app/hooks'
import { CharacterCard } from './components/CharacterCard/CharacterCard'
import { Modal } from './components/Modal/Modal'
import { useGetCharactersQuery } from './slices/rickAndMortyApi/rickAndMortyApi'
import { characterType } from './types/characterType'

function App() {
  const { data, isFetching, error } = useGetCharactersQuery(1)
  const isModalActive = useAppSelector((state) => state.characterModal.value)

  if (isFetching) {
    return <div>Please wait...</div>
  }

  if (error) {
    return <div>Something went wrong</div>
  }

  const characters = data.results

  return (
    <>
      {isModalActive ? <Modal /> : null}
      <h1>Rick and Morty Universe</h1>
      {characters.map((character: characterType) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </>
  )
}

export default App
