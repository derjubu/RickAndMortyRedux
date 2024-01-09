import { useAppDispatch } from '../../app/hooks'
import { characterType } from '../../types/characterType'
import { Favourite } from '../Favourite/Favourite'
import classes from './Modal.module.css'

type modalProps = {
  character: characterType
}

export function Modal({ character }: modalProps): JSX.Element {
  return (
    <dialog className={classes.background}>
      <h2>{character.name}</h2>
      <Favourite character={character} />
      <img src={character.image} height="250px" />
      <button
        onClick={() =>
          //@ts-ignore
          document.getElementById('dialog').close()
        }
      >
        Close Modal
      </button>
    </dialog>
  )
}
