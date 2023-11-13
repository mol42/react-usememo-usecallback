import React from 'react';

import Clock from './Clock';
import PrimeCalculator from './PrimeCalculator';

function App() {
  console.log("Demo4 render");

  return (
    <>
      <Clock />
      <PrimeCalculator name="demo4" />
    </>
  );
}

export default App;