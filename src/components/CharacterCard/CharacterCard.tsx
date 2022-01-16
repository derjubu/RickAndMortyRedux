import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { toggleModal } from '../../slices/showModal/showModalSlice'
import { characterType } from '../../types/characterType'
import { FavouriteComponent } from '../FavouriteComponent/FavouriteComponent'
import { Modal } from '../Modal/Modal'

type CharacterCardProps = {
  character: characterType
}

export function CharacterCard({ character }: CharacterCardProps): JSX.Element {
  const dispatch = useDispatch()

  function showModalBox(characterIformation: any) {
    dispatch(toggleModal(characterIformation))
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} />
      <FavouriteComponent character={character} />
      <button
        onClick={() => showModalBox({ value: true, character: { character } })}
      >
        Show modal
      </button>
    </div>
  )
}
