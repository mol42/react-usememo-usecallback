import React from 'react';

import TestButtonForUseCallback from './TestButton_Demo6';

function App() {
  const [count, setCount] = React.useState(0);

  // const i = 10;
  // refereans
  function handleTestButtonClick() {
    setCount((currentValue) => currentValue + 1234);
  }

  return (
    <>
      Count: {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <TestButtonForUseCallback handleClick={handleTestButtonClick} />
    </>
  );
}

export default App;