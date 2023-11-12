import React from 'react';
import './App.css';
import DemoApp from './Demo_Rerender';

function App() {
  console.log("App -> render");
  return <>
   <DemoApp name='demo1' />
   <DemoApp name='demo2' />
  </>
}

export default App;
