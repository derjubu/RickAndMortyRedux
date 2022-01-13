import {useCallback} from "react";
import {useIsBookmarked} from "../hooks/use-bookmarks";
import Favorite from "./Favorite";

type CardProps = {
  name: string
  image: string
  id: number
}

export function Card({ name, image, id }: CardProps): JSX.Element {

  const [isBookmarked, toggle] = useIsBookmarked(id);

    const onToggleBookmark = useCallback(()=>{
        toggle();
    }, [ id ]);

  return (
    <div>
      <p>{name}</p>
      <img src={image} />
        <Favorite isFavorite={isBookmarked} />
      <button onClick={onToggleBookmark}>Click Here</button>
    </div>
  )
}
