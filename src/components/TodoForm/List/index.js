import React from 'react'
import PropTypes from 'prop-types'


export const List = ({todos, handler}) => {
  return (

  <ol className="section">
    {todos.map(({id, completed, text}) => (
      <li key={id} data-id={id} className="mt-4 has-text-centered"><strong>{text}</strong>
        <input className="" type="checkbox" onClick={handler} />
      </li>
    ))}
  </ol>
  )
}

List.propTypes = {
  todos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

