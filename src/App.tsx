import { useState } from "react";

const App = () => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [sum, setSum] = useState(0);

  const handleAdd = () => {
    setSum(Number(one) + Number(two));
  };
  return (
    <div>
      <div>
        <input
          type="number"
          value={one}
          onChange={(e) => {
            setOne(Number(e.target.value));
          }}
        />{" "}
        <input
          type="number"
          value={two}
          onChange={(e) => {
            setTwo(Number(e.target.value));
          }}
        />{" "}
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="sum">Sum: {sum}</div>
    </div>
  );
};

export default App;
