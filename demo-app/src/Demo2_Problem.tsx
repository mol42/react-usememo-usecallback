import React from 'react';
import format from 'date-fns/format';

function App() {
  const [selectedNum, setSelectedNum] = React.useState(100);

  // `time` degiskeni 1sn araliklarla degistigi icin
  // guncel zamani veriyor.
  // NOT: her 1 sn icinde data degistigi icin "tekrar cizim"
  // gerceklesiyor.
  const time = useTime();

  console.log(`Demo2 render`);

  // Prime degerleri hesapla
  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <>
      <p className="clock">{format(time, 'hh:mm:ss a')}</p>
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
    </>
  );
}

/*
useTime bir hook'tur 
*/
function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
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