import {useGetRickAndMortyCharactersQuery} from './slices/RickAndMortyApi/RickAndMortyApiSlice'
import {Character} from "./app/types";
import {CharacterCard} from "./components/CharacterCard";

function App() {
  const { data, isFetching, error } = useGetRickAndMortyCharactersQuery(1)

  if (isFetching) {
    return <div>Retrieve data</div>
  }

  if (error) {
    return <div>An error occurred</div>
  }

  const characters = data.results as Character[]

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard
            key={character.id}
            character={character}
        />
      ))}
    </div>
  )
}

export default App
