import { useState } from "react"

export function AddForm({ onAdd }) {
  const [inputText, setInputText] = useState("")

  function submitForm(e) {
    e.preventDefault()
    if (inputText === "") return

    onAdd(inputText)
    setInputText("")
  }

  return (
    <form onSubmit={submitForm} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}