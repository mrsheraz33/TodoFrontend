import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📭</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No todos yet!</h3>
        <p className="text-gray-500">Click the "Add New Todo" button to create your first todo.</p>
      </div>
    );
  }

  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="space-y-6">
      {/* Pending Todos */}
      {pendingTodos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Pending Tasks ({pendingTodos.length})
          </h3>
          <div className="space-y-3">
            {pendingTodos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Todos */}
      {completedTodos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Completed Tasks ({completedTodos.length})
          </h3>
          <div className="space-y-3">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;