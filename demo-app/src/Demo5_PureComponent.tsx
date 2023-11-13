import React from 'react';
import { getHours } from 'date-fns';

import Clock from './Clock_Demo5';
import PrimeCalculator from './PrimeCalculator_Demo5';

// Komponenti "PureComponent" haline getiririz
// 
// "Pure component" olan komponentler hangi data gelirse gelsin
// ayni sonucu donerler ve React bunu bildigi zaman bu
// komponentler icin re-render kontrolu hesaplamasina
// girismez
const PurePrimeCalculator = React.memo(PrimeCalculator);
// const PurePrimeCalculator = PrimeCalculator;

function App() {
  const time = useTime();

  console.log("Demo5 render");
  // Come up with a suitable background color,
  // based on the time of day:
  const backgroundColor = getBackgroundColorFromTime(time);

  return (
    <div style={{ backgroundColor }}>
      <Clock time={time} />
      <PurePrimeCalculator />
    </div>
  );
}

const getBackgroundColorFromTime = (time: Date) => {
  const hours = getHours(time);
  
  if (hours < 12) {
    // A light yellow for mornings
    return 'hsl(50deg 100% 90%)';
  } else if (hours < 18) {
    // Dull blue in the afternoon
    return 'hsl(220deg 60% 92%)'
  } else {
    // Deeper blue at night
    return 'hsl(220deg 100% 80%)';
  }
}

function useTime() {
  const [time, setTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => {
      window.clearInterval(intervalId);
    }
  }, []);
  
  return time;
}

export default App;