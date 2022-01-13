import {useIsBookmarked} from "../app/hooks";

type FavoriteProps = {
    id: number
}

export default function Favorite({id}: FavoriteProps): JSX.Element {
    const [isBookmarked] = useIsBookmarked(id);
    return <p>Favorite? {isBookmarked ? 'yes' : 'no'}</p>
}