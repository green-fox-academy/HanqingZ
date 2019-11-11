import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './counter';
import Tag from'./tag';
import store from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Counter />
          <p>================================</p>
          <Tag />
        </Provider>
      </header>
    </div>
  );
}

export default App;
