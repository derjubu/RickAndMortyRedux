import { bookType } from '../../types/bookType'
import { Bookmark } from '../Bookmark/Bookmark'
import { Modal } from '../Modal/Modal'
import classes from './Card.module.css'

type cardProps = {
  book: bookType
}

export function Card({ book }: cardProps): JSX.Element {
  return (
    <div className={classes.card}>
      <h2>{book.title}</h2>
      <Bookmark book={book} />
      <img src={book.image} height="250px" />
    </div>
  )
}
