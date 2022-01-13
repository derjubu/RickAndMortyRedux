type FavoriteProps = {
    isFavorite: boolean
}

export default function Favorite({isFavorite}: FavoriteProps): JSX.Element {
    return <p>Favorite? {isFavorite ? 'yes' : 'no'}</p>
}