import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Chat />
      </Provider>
    </div>
  );
}

export default App;
