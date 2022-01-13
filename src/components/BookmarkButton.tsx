import {useCallback} from "react";
import {useIsBookmarked} from "../hooks/use-bookmarks";

type BookmarkButtonProps = {
    id: number
}

const BookmarkButton = (
    {id}: BookmarkButtonProps
) => {

    const [isBookmarked, toggle] = useIsBookmarked(id);

    const onToggleBookmark = useCallback(()=>{
        toggle();
    }, [ id ]);

    return  <button onClick={onToggleBookmark}>
        {isBookmarked ? "Remove bookmark" : "Add bookmark"}
    </button>
}

export default BookmarkButton;