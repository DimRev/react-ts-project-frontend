import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { addItem, loadItems, removeItem } from '../store/actions/item.action'
import { useAppSelector } from '../store/store'

type ShopItemType = {
  _id: string
  name: string
}

function Shop() {
  const [name, setName] = useState<string>('')
  useEffect(() => {
    loadItems()
  }, [])
  const items = useAppSelector((storeState) => storeState.item.items)

  function onRemoveItem(item: ShopItemType) {
    removeItem(item._id)
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    addItem({name: name})
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const value: string = ev.target.value
    setName(value)
  }

  return (
    <section className="app-main page-main">
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} type="text" />
        <button>Submit</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item._id} - {item.name}{' '}
            <button
              onClick={() => {
                onRemoveItem(item)
              }}>
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Shop
