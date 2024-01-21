import { itemService } from "../../service/items.service.ts";
import { ReducerItemType, ADD_ITEM, REMOVE_ITEM, SET_ITEMS, UPDATE_ITEM } from "../reducers/item.reducer.ts";
import { store } from "../store.ts";



export async function loadItems() {
  try {
    const items = await itemService.query()
    store.dispatch(SET_ITEMS({ items }))
  } catch (err) {
    console.error(`Failed to load items -> \n`, err)
  }
}

export async function addItem(item: ReducerItemType) {
  try {
    const itemToAdd = await itemService.save(item)
    store.dispatch(ADD_ITEM({ itemToAdd }))
  } catch (err) {
    console.error(`Failed to add item -> \n`, err)
  }
}


export async function updateItem(item: ReducerItemType) {
  try {
    const itemToUpdate = await itemService.save(item)
    store.dispatch(UPDATE_ITEM({ itemToUpdate }))
  } catch (err) {
    console.error(`Failed to update item -> \n`, err)
  }
}


export async function removeItem(itemId: string) {
  try {
    await itemService.remove(itemId)
    store.dispatch(REMOVE_ITEM({ itemId }))
  } catch (err) {
    console.error(`failed to remove item -> \n`, err)
  }
}
