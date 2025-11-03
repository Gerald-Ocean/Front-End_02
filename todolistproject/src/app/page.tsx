"use client"; 

import { FC, useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Fungsi untuk menambah todo baru
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  // Fungsi untuk toggle completed
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Fungsi untuk hapus todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Fungsi untuk clear completed
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter todos berdasarkan state filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Hitung items left
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 font-sans bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
    >
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-md shadow-sm overflow-hidden border border-gray-200">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight">To do Today</h1>
        </header>

        {/* Input Section */}
        <div className="p-6 border-b border-gray-200 relative">
          <form className="relative" onSubmit={addTodo}>
            <input
              type="text"
              placeholder="Ngapain Hari Ini?"
              className="w-full p-3.5 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-base placeholder-gray-500 pr-10"
              value={inputText}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsdXMtaWNvbiBsdWNpZGUtcGx1cyI+PHBhdGggZD0iTTUgMTJoMTQiLz48cGF0aCBkPSJNMTIgNXYxNCIvPjwvc3ZnPg=="
                alt="Add Todo"
                width={20}
                height={20}
                className="text-gray-300 opacity-50"
              />
            </button>
          </form>
        </div>

        {/* Todo List */}
        <ul className="divide-y divide-gray-100">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="p-5 flex items-center hover:bg-gray-50 transition-colors duration-150">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 rounded border-gray-300 mr-3 focus:ring-blue-500"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={`flex-1 text-sm font-medium ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} className="ml-2 p-1 rounded transition-colors">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRlbGV0ZS1pY29uIGx1Y2lkZS1kZWxldGUiPjxwYXRoIGQ9Ik0xMCA1YTIgMiAwIDAgMC0xLjM0NC41MTlsLTYuMzI4IDUuNzRhMSAxIDAgMCAwIDAgMS40ODFsNi4zMjggNS43NDFBMiAyIDAgMCAwIDEwIDE5aDEwYTIgMiAwIDAgMCAyLTJWN2EyIDIgMCAwIDAtMi0yeiIvPjxwYXRoIGQ9Im0xMiA5IDYgNiIvPjxwYXRoIGQ9Im0xOCA5LTYgNiIvPjwvc3ZnPg=="
                  alt="Delete Todo"
                  width={16}
                  height={16}
                  className="text-gray-400 hover:text-gray-600 opacity-50 hover:opacity-100"
                />
              </button>
            </li>
          ))}
          {filteredTodos.length === 0 && (
            <li className="p-5 text-center text-gray-500 text-sm">No todos yet</li>
          )}
        </ul>

        {/* Footer */}
        <footer className="p-4 bg-white border-t border-gray-200">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span className="font-normal">{itemsLeft} items left</span>
            <nav className="flex space-x-6" role="navigation">
              <button
                onClick={() => setFilter('all')}
                className={`hover:text-blue-500 hover:underline transition-colors font-normal ${filter === 'all' ? 'text-blue-500 underline' : ''}`}
              >
                Semua Aktifitas
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`hover:text-blue-500 hover:underline transition-colors font-normal ${filter === 'active' ? 'text-blue-500 underline' : ''}`}
              >
                Sedang Berjalan
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`hover:text-blue-500 hover:underline transition-colors font-normal ${filter === 'completed' ? 'text-blue-500 underline' : ''}`}
              >
                Selesai
              </button>
            </nav>
            <button
              onClick={clearCompleted}
              className="text-gray-500 hover:text-blue-500 hover:underline transition-colors font-normal text-xs"
            >
              Hapus Semua
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;