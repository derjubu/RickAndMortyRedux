import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleFavourite } from '../../slices/Favourites/FavouritesSlice'
import { toggleFilter } from '../../slices/FilteredChars/FilteredCharsSlice'

import classes from './Menu.module.css'

type menuProps = {
  charFiltered: Boolean
}

export function Menu({ charFiltered }: menuProps): JSX.Element {
  const dispatch = useAppDispatch()
  const charFilter: boolean = useAppSelector((state) => state.Filter)

  function handleClick() {
    dispatch(toggleFilter())
  }

  const filterText = charFiltered ? 'Show all' : 'Show favourites'

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.headline}>Rick and Morty Universe</h1>
        <p className={classes.subline}>
          Click on a character for more details.
        </p>
        <button onClick={() => handleClick()}>{filterText}</button>
      </div>
    </>
  )
}
