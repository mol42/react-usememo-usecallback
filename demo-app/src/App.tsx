import React from 'react';
import './App.css';
import DemoApp from './Demo3_useMemo';

/*
NOT: React re-render anlatimini iceren demo kodlari
App1.tsx icinde yer aliyor.
*/

function App() {
  console.log("App -> render");
  return <>
   <DemoApp />
  </>
}

export default App;
