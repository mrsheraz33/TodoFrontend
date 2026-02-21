import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodoComplete,
  clearError
} from '../features/todos/todoSlice';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const TodoApp = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const [editingTodo, setEditingTodo] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleAddTodo = async (todoData) => {
    await dispatch(addTodo(todoData));
    setShowForm(false);
  };

  const handleUpdateTodo = async (id, todoData) => {
    await dispatch(updateTodo({ id, todoData }));
    setEditingTodo(null);
    setShowForm(false);
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      dispatch(deleteTodo(id));
    }
  };

  const handleToggleComplete = (todo) => {
    dispatch(toggleTodoComplete(todo));
  };

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setEditingTodo(null);
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white">
          <h1 className="text-3xl font-bold text-center">📝 Todo List App</h1>
          <p className="text-center mt-2 opacity-90">Manage your tasks efficiently</p>
        </div>

        {/* Error Display */}
        {error && <ErrorMessage message={error} />}

        {/* Main Content */}
        <div className="p-6">
          {/* Add Todo Button */}
          {!showForm && !editingTodo && (
            <button
              onClick={() => setShowForm(true)}
              className="w-full mb-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              <span className="text-xl">➕</span> Add New Todo
            </button>
          )}

          {/* Todo Form */}
          {showForm && (
            <TodoForm
              onSubmit={editingTodo ? 
                (data) => handleUpdateTodo(editingTodo._id, data) : 
                handleAddTodo
              }
              initialData={editingTodo}
              onCancel={handleCancelForm}
              isEditing={!!editingTodo}
            />
          )}

          {/* Loading State */}
          {loading && <Loader />}

          {/* Todo List */}
          {!loading && (
            <TodoList
              todos={todos}
              onToggle={handleToggleComplete}
              onEdit={handleEditClick}
              onDelete={handleDeleteTodo}
            />
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <p className="text-center text-gray-600 text-sm">
            Total Tasks: {todos.length} | Completed: {todos.filter(t => t.completed).length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;