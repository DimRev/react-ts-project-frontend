import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./reducers/item.reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer
  }
})


//Dispatch / Selector typed hooks
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector