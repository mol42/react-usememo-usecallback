import React from 'react';
import { default as DemoApp} from './PrimeCalculator';

function App({name}: {name: string}) {
  const [selectedNum, setSelectedNum] = React.useState(100);

  // NOT: development ortaminda 2 kez render cagrilir
  // production ortaminda 1 kex cagrilir
  console.log(`${name} render`);

  // Prime degerleri hesapla
  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <>
      <form>
        <label htmlFor="num">Sayi giriniz:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // Makinayi kasmamasi icin 1000'den
            // daha buyuk sayiya izin vermiyoruz
            let num = Math.min(1000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        1 ile <b>{selectedNum}</b> arasinda {allPrimes.length} tane asal sayi vardir.
        <br />
        <span className="prime-list">{allPrimes.join(', ')}</span>
      </p>
      <DemoApp name="demo3" /> 
    </>
  );
}

function isPrime(n: number) {
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

export default App;