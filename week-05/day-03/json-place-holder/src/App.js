import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import JsonData from './component';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <JsonData />
      </Provider>
    </div>
  );
}

export default App;
