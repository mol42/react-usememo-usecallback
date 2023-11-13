import React, { useCallback } from 'react';

import TestButtonForUseCallback from './TestButton_Demo6';

function App() {
  const [count, setCount] = React.useState(0);

  console.log("Demo8 render");

  const handleTestButtonClick = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  return (
    <>
      Count: {count}
      <br />
      <br />
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me!
      </button>
      <br />
      <TestButtonForUseCallback handleClick={handleTestButtonClick} />
    </>
  );
}

export default App;