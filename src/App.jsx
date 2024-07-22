import React from "react";
import Counter from "./components/counter/Counter";

const App = () => {
  return (
    <div>
      <Counter initValue={12} jump={5} />
    </div>
  );
};

export default App;
