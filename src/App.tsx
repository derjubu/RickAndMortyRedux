import {Card} from './components/Card'
import {useGetRickAndMortyCharactersQuery} from './slices/RickAndMortyApi/RickAndMortyApiSlice'
import {Character} from "./app/types";

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
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </div>
  )
}

export default App
