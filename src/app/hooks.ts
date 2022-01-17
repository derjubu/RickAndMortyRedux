import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './store'

//react-redux has hooks, TypeScript types say how these hooks work;
//but the hooks do not know about the specific state/dispatch capabilities of the app
//that's why you predefine hooks that already know these right types for state/dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
