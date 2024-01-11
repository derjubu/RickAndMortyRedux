import { characterType } from '../../types/characterType'
import { Favourite } from '../Favourite/Favourite'
import classes from './Modal.module.css'

type modalProps = {
  character: characterType
}

export function Modal({ character }: modalProps): JSX.Element {
  const isAlive = character.status

  return (
    <div className={classes.dialogContainer}>
      <dialog id="dialog" className={classes.dialog}>
        <div className={classes.container}>
          <h2 className={classes.name}>{character.name}</h2>
          <Favourite character={character} />
          <img src={character.image} height="250px" />
          <p>{isAlive ? '🟢Alive' : '🔴Dead'}</p>
          <button
            className={classes.button}
            onClick={() =>
              //@ts-ignore
              document.getElementById('dialog').close()
            }
          >
            Close Modal
          </button>
        </div>
      </dialog>
    </div>
  )
}
