import { useAppDispatch } from '../../app/hooks'
import { characterType } from '../../types/characterType'
import { Favourite } from '../Favourite/Favourite'

import { toggleModal } from '../../slices/ShowModal/ShowModalSlice'

import classes from './Card.module.css'

type cardProps = {
  character: characterType
}

export function Card({ character }: cardProps): JSX.Element {
  const isAlive = character.status

  const dispatch = useAppDispatch()

  function openModal(character: characterType) {
    dispatch(toggleModal({ character }))
  }

  return (
    <li className={classes.card}>
      <Favourite character={character} />
      <img src={character.image} height="250px" />
      <h2>{character.name}</h2>
      <p>{isAlive ? '🟢Alive' : '🔴Dead'}</p>
      <button
        onClick={() => {
          openModal(character)
          //@ts-ignore
          document.getElementById('dialog').showModal()
        }}
      >
        Open for Dialog
      </button>
    </li>
  )
}
