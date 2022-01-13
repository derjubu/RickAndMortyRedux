import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggle } from '../slices/Bookmarks/BookmarksSlice'
import {useCallback} from "react";

type CardProps = {
  name: string
  image: string
  id: number
}

export function Card({ name, image, id }: CardProps): JSX.Element {
  const dispatch = useAppDispatch()
  const bookmarks = useAppSelector((state) => state.bookmarks)

    const onToggleBookmark = useCallback(()=>{
        dispatch(toggle(id));
    }, [ id ]);

  return (
    <div>
      <p>{name}</p>
      <img src={image} />
      <p>Favorite? {bookmarks.includes(id) ? 'yes' : 'no'}</p>
      <button onClick={onToggleBookmark}>Click Here</button>
    </div>
  )
}
