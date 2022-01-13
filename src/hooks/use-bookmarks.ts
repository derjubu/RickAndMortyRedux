import {useAppDispatch, useAppSelector} from "../app/hooks";
import {toggle} from "../slices/Bookmarks/BookmarksSlice";

export const useBookmarks = () => useAppSelector((state) => state.bookmarks);

export const useIsBookmarked = (id: number): [boolean, () => void]  => {
    const dispatch = useAppDispatch()
    const bookmarks = useBookmarks();
    const isBookmarked = bookmarks.includes(id);
    const toggleBookmarked = ()=> dispatch(toggle(id))

    return [
        isBookmarked,
        toggleBookmarked,
    ]
}