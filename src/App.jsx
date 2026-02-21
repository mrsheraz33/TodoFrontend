import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 py-8">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;