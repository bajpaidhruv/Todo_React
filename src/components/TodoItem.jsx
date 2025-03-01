import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className={`group flex items-center p-4 rounded-xl backdrop-blur-lg
      border border-white/20 shadow-xl transition-all duration-300
      hover:shadow-2xl hover:scale-[1.02] 
      ${todo.completed ? "bg-emerald-500/10" : "bg-white/10"}`}>
      
      {/* Checkbox with custom styling */}
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer rounded-lg
          accent-emerald-500 transition-all duration-300
          hover:scale-110"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text Input */}
      <input
        type="text"
        className={`mx-4 flex-grow px-4 py-2 rounded-lg
          text-white bg-transparent transition-all duration-300
          ${isTodoEditable ? "border border-white/20" : "border-transparent"}
          ${todo.completed ? "line-through opacity-70" : ""}
          focus:outline-none focus:border-white/40`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Action Buttons Container */}
      <div className="flex gap-2 transition-opacity duration-300 
        opacity-0 group-hover:opacity-100">
        
        {/* Edit/Save Button */}
        <button
          className={`p-2 rounded-lg transition-all duration-300
            hover:scale-110 disabled:opacity-50 disabled:hover:scale-100
            ${isTodoEditable 
              ? "bg-emerald-500/20 hover:bg-emerald-500/30" 
              : "bg-blue-500/20 hover:bg-blue-500/30"}`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "💾" : "✏️"}
        </button>

        {/* Delete Button */}
        <button
          className="p-2 rounded-lg bg-red-500/20 transition-all duration-300
            hover:bg-red-500/30 hover:scale-110"
          onClick={() => deleteTodo(todo.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;