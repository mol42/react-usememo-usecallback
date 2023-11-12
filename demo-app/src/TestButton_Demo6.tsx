import React from 'react';

type TestButtonForUseCallbackProps = {
  handleClick: () => void
}

function TestButtonForUseCallback({ handleClick }: TestButtonForUseCallbackProps) {
  console.log('Render TestButtonForUseCallback');
  
  return (
    <button
      className="test-button"
      onClick={handleClick}
    >
      SET A NUMBER
    </button>
  );
}

export default React.memo(TestButtonForUseCallback);