import React from 'react'
import PropTypes from 'prop-types'



export const List = ({todos, handler}) => {

  return (

  <ul className="section">
    {todos.map(({id, completed, text}) => (
      <li key={id} data-id={id} className="mt-4 has-text-centered is-family-code is-size-5">{text}
        <input className="is-rounded mx-4" type="checkbox" onClick={handler} />
      </li>
    ))}
  </ul>
  )
}



List.propTypes = {
  todos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

