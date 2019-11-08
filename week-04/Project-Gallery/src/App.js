import React, { useState } from 'react';
import './App.css';
import MainView from './components/mainView';
import Thumbnail from './components/thumbnails';
import images from './components/images';
import LeftButton from './components/left-button';
import RightButton from './components/right-button';


function App() {

  const [index, setIndex] = useState(0);

  function setIndexLeft(index) {
    if(index <= 0){
      index = 6;
    }
    else{
      index -= 1;
    }
    setIndex(index);
  }

  function setIndexRight(index) {
    if(index >= 6){
      index = 0;
    }
    else{
      index += 1;
    }
    setIndex(index);
  }

  return (
    <div className="App">
      <main>
        <LeftButton index={ index } setIndex={ setIndexLeft }/>
        <MainView images={ images } index={ index }/>
        <RightButton index={ index } setIndex={ setIndexRight }/>
      </main>
      <footer>
        <Thumbnail images={ images } index={ index } setIndex={ setIndex } />
      </footer>
    </div>
  );
}

export default App;
