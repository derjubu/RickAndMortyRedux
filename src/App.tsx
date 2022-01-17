import { useAppDispatch, useAppSelector } from './app/hooks'
import { Card } from './components/Card/Card'
import { Modal } from './components/Modal/Modal'
import { useGetBooksQuery } from './slices/BooksApi/BooksApi'
import { toggleModal } from './slices/ShowModal/ShowModalSlice'
import { bookType } from './types/bookType'

function App() {
  const { data, isFetching } = useGetBooksQuery(10)
  const modalInfo = useAppSelector((state) => state.Modal)
  const isModal = modalInfo.value
  const modalBook = modalInfo.book
  const dispatch = useAppDispatch()
  function openModal(book: bookType) {
    dispatch(toggleModal({ book }))
  }

  if (isFetching) {
    return <div>Please wait while fetching data</div>
  }
  const books = data.data
  return (
    <>
      <h1>Book App</h1>
      {isModal ? <Modal book={modalBook} /> : null}
      {books.map((book: bookType) => (
        <div key={book.id}>
          <Card book={book} />
          <button onClick={() => openModal(book)}>Open for {book.title}</button>
        </div>
      ))}
    </>
  )
}

export default App
