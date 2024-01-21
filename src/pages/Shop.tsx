import { useEffect } from 'react'
import { loadItems } from '../store/actions/item.action'
import { useAppSelector } from '../store/store'

function Shop() {
  useEffect(() => {
    loadItems()
  }, [])
  const items = useAppSelector((storeState) => storeState.item.items)

  return (
    <section className="app-main page-main">
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item._id} - {item.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Shop
