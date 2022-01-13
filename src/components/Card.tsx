import {useCallback} from "react";
import {useIsBookmarked} from "../hooks/use-bookmarks";
import Favorite from "./Favorite";
import BookmarkButton from "./BookmarkButton";

type CardProps = {
    name: string
    image: string
    id: number
}

export function Card({name, image, id}: CardProps): JSX.Element {

    const [isBookmarked] = useIsBookmarked(id);

    return (
        <div>
            <p>{name}</p>
            <img src={image}/>
            <Favorite isFavorite={isBookmarked}/>
            <BookmarkButton id={id}/>
        </div>
    )
}
