import { useAppSelector } from './app/hooks'
import { Card } from './components/card'
import { useGetRickAndMortyCharactersQuery } from './slices/RickAndMortyApi/RickAndMortyApiSlice'

function App() {
  const { data, isFetching, error } = useGetRickAndMortyCharactersQuery(1)

  if (isFetching) {
    return <div>Retrieve data</div>
  }

  if (error) {
    return <div>An error occured</div>
  }

  const characters = data.results

  return (
    <div>
      {characters.map((character: any) => (
        <Card
          key={character.id}
          name={character.name}
          image={character.image}
          id={character.id}
        />
      ))}
    </div>
  )
}

export default App
