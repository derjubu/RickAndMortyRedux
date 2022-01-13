import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggle } from '../slices/Bookmarks/BookmarksSlice'

type cardProps = {
  name: string
  image: string
  id: number
}

export function Card({ name, image, id }: cardProps): JSX.Element {
  const dispatch = useAppDispatch()
  const bookmarks = useAppSelector((state) => state.bookmarks)

  function handleClick(id: number) {
    return dispatch(toggle(id))
  }

  return (
    <div>
      <p>{name}</p>
      <img src={image} />
      <p>Favorite? {bookmarks.includes(id) ? 'yes' : 'no'}</p>
      <button onClick={(event) => handleClick(id)}>Click Here</button>
    </div>
  )
}
