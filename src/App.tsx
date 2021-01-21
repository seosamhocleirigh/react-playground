import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardHolder from "./Components/CardHolder";
import { DraggableProvider } from './Components/DraggableContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DraggableProvider>
          <CardHolder />
        </DraggableProvider>
      </header>
    </div>
  );
}

export default App;
