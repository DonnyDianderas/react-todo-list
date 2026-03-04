import { Item } from "./Item"

export function List({ items, updateItem, removeItem }) {
  return (
    <ul className="list">
      {items.length === 0 && "No Items"}
      {items.map(item => {
        return (
          <Item
            {...item}
            key={item.id}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        )
      })}
    </ul>
  )
}