import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ReducerItemType = {
  _id: string;
  name: string;
}

export type ItemStateType = {
  items: ReducerItemType[]
}

const initialState: ItemStateType = {
  items: []
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    SET_ITEMS: (state, action: PayloadAction<{ items: ReducerItemType[] }>) => {
      const { items } = action.payload
      state.items = [...items]
    },
    REMOVE_ITEM: (state, action: PayloadAction<{ itemId: string }>) => {
      const { itemId } = action.payload
      const newItems = state.items.filter(item => item._id !== itemId)
      state.items = [...newItems]
    },
    ADD_ITEM: (state, action: PayloadAction<{ itemToAdd: ReducerItemType }>) => {
      const { itemToAdd } = action.payload
      const newItems = [...state.items, itemToAdd]
      state.items = [...newItems]
    },
    UPDATE_ITEM: (state, action: PayloadAction<{ itemToUpdate: ReducerItemType }>) => {
      const { itemToUpdate } = action.payload
      const newItems = state.items.map(item => {
        if (item._id === itemToUpdate._id) return itemToUpdate
        return item
      })
      state.items = [...newItems]
    }
  }
})

export default itemSlice.reducer

export const { ADD_ITEM, REMOVE_ITEM, SET_ITEMS, UPDATE_ITEM } = itemSlice.actions
