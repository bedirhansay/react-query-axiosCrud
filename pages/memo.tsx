import React, { useMemo, useState } from "react";

export default function MyComponent() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return number1 + number2;
  }, [number1, number2]);

  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />
      <p>Sum: {sum}</p>
    </div>
  );
}
