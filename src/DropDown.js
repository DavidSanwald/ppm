import React from 'react'

function DropDown({items, current, changeHandler}) {
  return (
    <form>
      <select
        value={current}
        onChange={e => {
          e.preventDefault()
          changeHandler(e.target.value)
        }}
      >
        {current === 'unassigned' && (
          <option value="unassigned">unassigned</option>
        )}
        {items.map(item => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  )
}
export default DropDown
