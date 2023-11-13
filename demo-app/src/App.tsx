import React from 'react';
import './App.css';
import DemoApp from './Demo1_Intro';

/*
NOT: React re-render anlatimini iceren demo kodlari
App1.tsx icinde yer aliyor. index.tsx icinde import
edilen dosyayi App1 yaparsaniz gorebileceksiniz.
*/

function App() {
  console.log("App -> render");
  return <>
   <DemoApp />
  </>
}

export default App;
