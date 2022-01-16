import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { toggleFavourite } from '../../slices/favourites/favouritesSlice'
import { characterType } from '../../types/characterType'

type FavouriteComponentProps = {
  character: characterType
}

export function FavouriteComponent({
  character,
}: FavouriteComponentProps): JSX.Element {
  const dispatch = useDispatch()
  const favouriteCharacters: number[] = useAppSelector(
    (state) => state.favouriteCharacters
  )
  const isFavourite: boolean = favouriteCharacters.includes(character.id)

  function toggleFavouriteCharacter(id: number) {
    dispatch(toggleFavourite(id))
    console.log(id)
  }

  return (
    <div>
      <p>Is this character a favourite? {isFavourite ? 'Yes' : 'No'}</p>
      <button onClick={() => toggleFavouriteCharacter(character.id)}>
        Change
      </button>
    </div>
  )
}
