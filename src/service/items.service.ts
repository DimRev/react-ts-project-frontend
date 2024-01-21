import { storageService } from "./asyncStorage.service";
import { utilService } from "./util.service";

export const itemService = {
  query,
  getById,
  remove,
  save,
}

const demoData = [
  {
    _id: 'item0001',
    name: 'item1'
  },
  {
    _id: 'item0002',
    name: 'item2'
  },
  {
    _id: 'item0003',
    name: 'item3'
  }
]

export type ServiceItemType = {
  _id?: string;
  name: string;
}

type ServiceItemAddType = Omit<ServiceItemType, '_id'>
type ServiceItemUpdateType = Required<ServiceItemType>

const STORAGE_KEY: string = 'itemDB'

_demoDataLocalStorage()

function query() {
  return storageService.query(STORAGE_KEY) as Promise<ServiceItemUpdateType[]>
  // return httpService.get(BOARD_URL)
}

function getById(itemId: string) {
  return storageService.get(STORAGE_KEY, itemId) as Promise<ServiceItemUpdateType>
  // return httpService.get(BOARD_URL + boardId)
  // return httpService.get(BASE_URL + boardId)
}

function remove(itemId: string) {
  return storageService.remove(STORAGE_KEY, itemId)
  // return httpService.delete(BOARD_URL + boardId)
}

function save(item: ServiceItemType) {
  if (item._id) {
    return storageService.put(STORAGE_KEY, item as ServiceItemUpdateType) as Promise<ServiceItemUpdateType>
    // return httpService.put(BOARD_URL, board)
  } else {
    return storageService.post(STORAGE_KEY, item as ServiceItemAddType) as Promise<ServiceItemUpdateType>
    // return httpService.post(BOARD_URL, board)
  }
}

function _demoDataLocalStorage() {
  const items = utilService.loadFromStorage(STORAGE_KEY)
  if (!items || items.length === 0)
    utilService.saveToStorage(STORAGE_KEY, demoData)
}