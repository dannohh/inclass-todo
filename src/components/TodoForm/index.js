import React, { useEffect, useState } from 'react'
import {InputTodo} from './InputTodo'
import {Button} from './Button'
import {List} from './List'
import api from 'api'

export const TodoForm = () => {

const [todos, setTodos] = useState([])

  useEffect(() => {
  (async () => {
    setTodos(await api.index())
  })()
}, [])


const handleCheckBox = ({target}) => {
const targetID = target.parentElement.dataset.id
setTodos((currentTodos) => {

  const found = currentTodos.find(({ id }) => id === Number(targetID))

  found.completed = true

  const otherTodos = currentTodos.filter(({id}) =>
  JSON.parse(id) !== JSON.parse(targetID))


  return otherTodos.concat(found)
})
}


  return (
    <section className="section centered is-full-height has-background-info">
      <header className="hero column is-large has-text-centered has-background-white has-text-primary has-text-weight-bold is-family-code is-size-3">
        Checklist
      </header>

      <section className="container has-text-centered">
        <List todos={todos} handler={handleCheckBox}/>
        <InputTodo/>
        <Button />
        </section>

    </section>
  )
}
