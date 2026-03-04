import { useEffect, useState } from "react"
import { AddForm } from "./AddForm"
import "./styles.css"
import { List } from "./List"

export default function App() {
  const [items, setItems] = useState(() => {
    const savedData = localStorage.getItem("DATA")
    if (savedData == null) return []
    return JSON.parse(savedData)
  })

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(items))
  }, [items])

  function addItem(text) {
    setItems(current => {
      return [
        ...current,
        { id: crypto.randomUUID(), text, done: false },
      ]
    })
  }

  function updateItem(id, done) {
    setItems(current => {
      return current.map(item => {
        if (item.id === id) {
          return { ...item, done }
        }
        return item
      })
    })
  }

  function removeItem(id) {
    setItems(current => {
      return current.filter(item => item.id !== id)
    })
  }

  return (
    <>
      <AddForm onAdd={addItem} />
      <h1 className="header">Todo List</h1>
      <List items={items} updateItem={updateItem} removeItem={removeItem} />
    </>
  )
}