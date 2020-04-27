import React, { useState } from 'react';
import Chart from './Chart'

export default function App({ initialData }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1>{initialData.appName}</h1>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      Here is a button that will track how many times you click it:
      <br />
      <br />
      <button title="increment" onClick={() => setCount(count + 1)}>
        {count}
      </button> */}
      <Chart />
    </div>
  );
}
