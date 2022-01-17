import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleBookmark } from '../../slices/Bookmarks/BookmarksSlice'
import { bookType } from '../../types/bookType'

type bookmarkProps = {
  book: bookType
}

export function Bookmark({ book }: bookmarkProps): JSX.Element {
  const dispatch = useAppDispatch()
  const Bookmarks = useAppSelector((state) => state.Bookmarks)
  const isBookmark = Bookmarks.includes(book.id)

  function handleClick(number: number) {
    dispatch(toggleBookmark(number))
  }

  return (
    <div>
      <p>{isBookmark ? 'Bookmarked' : 'Uniteresting'}</p>
      <button onClick={() => handleClick(book.id)}>Click here</button>
    </div>
  )
}
