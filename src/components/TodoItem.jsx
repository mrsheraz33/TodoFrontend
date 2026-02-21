import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-200 ${
      todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
    }`}>
      <div className="flex items-start gap-3">
        
        {/* Checkbox */}
        <div className="pt-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo)}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
          />
        </div>

        {/* Todo Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`text-lg font-semibold ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}>
                {todo.title}
              </h3>

              {todo.description && (
                <p className={`mt-1 text-sm ${
                  todo.completed ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {todo.description}
                </p>
              )}

              <div className="mt-2 text-xs text-gray-400">
                Created: {formatDate(todo.createdAt)}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => onEdit(todo)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition duration-200"
                title="Edit"
              >
                <FaEdit size={16} />
              </button>

              <button
                onClick={() => onDelete(todo._id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition duration-200"
                title="Delete"
              >
                <FaTrash size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
