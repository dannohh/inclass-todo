import React from 'react'
import PropTypes from 'prop-types'


export const List = ({todos, handler}) => {
  return (
  <ol>
    {todos.map(({id, completed, text}) => (
      <li key={id} data-id={id} className=''>{text} <input type="checkbox" onClick={handler} /> </li>
    ))}
  </ol>
  )
}

List.propTypes = {
  todos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

