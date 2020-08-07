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
    <main className="flex is-vcentered">
      <header className="has-background-primary has-text-centered">Header</header>
      <List todos={todos  } handler={handleCheckBox}/>
      <InputTodo />
      <Button className="mt-6 is-vcentered"/>
    </main>
  )
}
