export function Item({ done, id, text, updateItem, removeItem }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={e => updateItem(id, e.target.checked)}
        />
        <span>{text}</span>
      </label>
      <button onClick={() => removeItem(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}