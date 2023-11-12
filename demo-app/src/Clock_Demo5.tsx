import React from 'react';
import format from 'date-fns/format';

type ClockProps = {
    time: Date
}

function Clock({ time }: ClockProps) {
  console.log("")
  return (
    <p className="clock">
      {format(time, 'hh:mm:ss a')}
    </p>
  );
}

export default Clock;