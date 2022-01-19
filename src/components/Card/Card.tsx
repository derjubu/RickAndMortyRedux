import { characterType } from '../../types/characterType'
import { Favourite } from '../Favourite/Favourite'
import classes from './Card.module.css'

type cardProps = {
  character: characterType
}

export function Card({ character }: cardProps): JSX.Element {
  const isAlive = character.status

  return (
    <li className={classes.card}>
      <Favourite character={character} />
      <img src={character.image} height="250px" />
      <h2>{character.name}</h2>
      <p>{isAlive ? '🟢Alive' : '🔴Dead'}</p>
    </li>
  )
}
