import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleModal } from '../../slices/showModal/showModalSlice'
import { FavouriteComponent } from '../FavouriteComponent/FavouriteComponent'
import classes from './Modal.module.css'

export function Modal({}): JSX.Element {
  const dispatch = useAppDispatch()
  const getCharacter: any = useAppSelector(
    (state) => state.characterModal.character
  )
  const characterModal = getCharacter.character

  function closeModal(info: any) {
    dispatch(toggleModal(info))
  }

  return (
    <div className={classes.container}>
      Modal
      <h2>{characterModal.name}</h2>
      <img src={characterModal.image} />
      <FavouriteComponent character={characterModal} />
      <button
        onClick={() =>
          closeModal({
            value: false,
            character: { name: '', image: '', id: 0 },
          })
        }
      >
        Close Modal
      </button>
    </div>
  )
}
