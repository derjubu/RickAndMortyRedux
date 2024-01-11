import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleFavourite } from '../../slices/Favourites/FavouritesSlice'
import { characterType } from '../../types/characterType'

import classes from './Favourite.module.css'

type favouriteProps = {
  character: characterType
}

export function Favourite({ character }: favouriteProps): JSX.Element {
  const dispatch = useAppDispatch()
  const Favourites = useAppSelector((state) => state.Favourites)
  const isFavourite = Favourites.includes(character.id)

  function handleClick(number: number) {
    dispatch(toggleFavourite(number))
  }

  return (
    <div className={classes.container}>
      <p>{isFavourite ? 'Bookmarked' : 'Uniteresting'}</p>
      <button onClick={() => handleClick(character.id)}>Click here</button>
    </div>
  )
}
