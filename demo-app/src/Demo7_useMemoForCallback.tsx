import React from 'react';

import TestButtonForUseCallback from './TestButton_Demo6';

function App() {
  const [count, setCount] = React.useState(0);

  const handleTestButtonClick = React.useMemo(() => {
    return function() {
      setCount((currentValue) => currentValue + 1234);
    }
  }, []);

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