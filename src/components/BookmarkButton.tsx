import {useCallback} from "react";
import {useIsBookmarked} from "../app/hooks";

type BookmarkButtonProps = {
    id: number
}

const BookmarkButton = (
    {id}: BookmarkButtonProps
) => {

    const [isBookmarked, toggleBookmarked] = useIsBookmarked(id);

    const onToggleBookmark = useCallback(() => {
        toggleBookmarked();
    }, [id]);

    return <button onClick={onToggleBookmark}>
        {isBookmarked ? "Remove bookmark" : "Add bookmark"}
    </button>
}

export default BookmarkButton;