import Favorite from "./Favorite";

type CardProps = {
    name: string
    image: string
    isFavorite: boolean
    onToggleFavorite: () => void
}

export function Card(
    {
        name,
        image,
        isFavorite,
        onToggleFavorite
    }: CardProps
): JSX.Element {

    return (
        <div>
            <p>{name}</p>
            <img src={image}/>
            <Favorite isFavorite={isFavorite}/>
            <button onClick={() => onToggleFavorite()}>
                {isFavorite ? "Unfavorize" : "Favorize"}
            </button>
        </div>
    )
}
