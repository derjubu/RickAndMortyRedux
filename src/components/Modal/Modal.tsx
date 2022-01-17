import { useAppDispatch } from '../../app/hooks'
import { toggleModal } from '../../slices/ShowModal/ShowModalSlice'
import { bookType } from '../../types/bookType'
import { Bookmark } from '../Bookmark/Bookmark'
import classes from './Modal.module.css'

type modalProps = {
  book: bookType
}

export function Modal({ book }: modalProps): JSX.Element {
  const dispatch = useAppDispatch()
  function closeModal() {
    dispatch(
      toggleModal({
        title: '',
        image: '',
        id: 0,
      })
    )
  }

  return (
    <div className={classes.background}>
      <h2>{book.title}</h2>
      <Bookmark book={book} />
      <img src={book.image} height="250px" />
      <button onClick={() => closeModal()}>Close Modal</button>
    </div>
  )
}
