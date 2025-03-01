import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()
      if (!todo) return
      addTodo({ todo, completed: false})
      setTodo("")
    }

    return (
        <form onSubmit={add} className="flex items-center gap-2 w-full max-w-4xl mx-auto p-4">
            <input
                type="text"
                placeholder="✍️ Add a new task..."
                className="w-full px-4 py-3 text-white rounded-lg 
                bg-white/10 backdrop-blur-md border-2 border-white/20
                focus:outline-none focus:ring-2 focus:ring-blue-500/40
                transition-all duration-300 ease-in-out
                placeholder:text-gray-600"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button 
                type="submit" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500
                text-white font-semibold tracking-wide
                transform hover:scale-105 active:scale-95
                transition-all duration-300 ease-in-out
                shadow-lg hover:shadow-xl
                disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!todo.trim()}
            >
                <span className="flex items-center gap-2">
                    Add Task
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
        </form>
    );
}

export default TodoForm;