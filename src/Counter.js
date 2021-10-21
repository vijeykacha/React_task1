import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState(0);

  const increment = () => {
    setCounters(counters + 1);
  };

  const decrement = () => {
    setCounters(counters - 1);

    if (counters === 0) {
      setCounters(!counters - 1);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="bg-green-500 h-9 w-10 rounded-l-lg text-white text-center"
        onClick={decrement}
      >
        -
      </button>
      <input type="text" className="text-center" value={counters} readOnly />
      <button
        type="button"
        className="bg-green-500 h-9 w-10 rounded-r-lg text-white text-center"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
