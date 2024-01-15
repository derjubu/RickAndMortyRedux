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
          <Favourite character={character} />
          <div
            onClick={() =>
              //@ts-ignore
              document.getElementById('dialog').close()
            }
          >
            <img src={character.image} height="250px" />
            <h2 className={classes.name}>{character.name}</h2>
            <p>{isAlive ? '🟢Alive' : '🔴Dead'}</p>
          </div>
        </div>
      </dialog>
    </div>
  )
}
