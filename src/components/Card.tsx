import Favorite from "./Favorite";
import BookmarkButton from "./BookmarkButton";

type CardProps = {
    name: string
    image: string
    id: number
}

export function Card({name, image, id}: CardProps): JSX.Element {

    return (
        <div>
            <p>{name}</p>
            <img src={image}/>
            <Favorite id={id}/>
            <BookmarkButton id={id}/>
        </div>
    )
}
