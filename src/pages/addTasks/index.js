import React, { useState } from "react"
import Link from "next/link"

const AddTask = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  return (
    <div className="flex justify-center pt-12">
      <form action="/..">
        <input
          className="font-bold border-8 border-blue-500 bg-green-400 placeholder:text-blue-500"
          type="text"
          placeholder="Add new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo(e.target.value)
              e.target.value = ""
            }
          }}
        />
      </form>
    </div>
  )
}

export default AddTask
