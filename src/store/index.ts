import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import sliceChangeApp from './appStore/sliceApp/slice';
import sliceRatingPage from './ratingStore/sliceRating/slice'
import { AppDispatch, RootState } from './types/types'


const rootReducer = combineReducers({
    appState: sliceChangeApp,
    ratingPage: sliceRatingPage
})

export const store = configureStore({
    reducer: rootReducer
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
