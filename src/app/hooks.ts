import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './store'
import {toggle} from "../slices/Bookmarks/BookmarksSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


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