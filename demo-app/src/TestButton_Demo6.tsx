import React from 'react';

type TestButtonForUseCallbackProps = {
  handleClick: () => void
}

function TestButtonForUseCallback({ handleClick }: TestButtonForUseCallbackProps) {
  console.log('Render TestButtonForUseCallback');
  const selectedNum = 100;
  
  // Eger ana komponenti React.memo ile kapladiysak bu
  // komponent icindeki hesaplamalara React.memo ile
  // cache uygulamamiza gerek yok.
  const allPrimes = React.useMemo(() => {
    console.log("TestButtonForUseCallback allPrimes");
    const result = [];
    
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }
    
    return result;
  }, [selectedNum]);

  return (
    <>
      <button
        className="test-button"
        onClick={handleClick}
      >
        SET A NUMBER
      </button>
      <br />
      <span>Prime numbers size: {allPrimes.length}</span>
    </>
  );
}

function isPrime(n: number){
  const max = Math.ceil(Math.sqrt(n));
  
  if (n === 2) {
    return true;
  }
  
  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default React.memo(TestButtonForUseCallback);