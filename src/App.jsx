import React from "react";
import Counter from "./components/counter/Counter";
import Greeting from "./components/greeting/Greeting";

const App = () => {
  return (
    <div>
      <Counter initValue={12} jump={5} />
      <Greeting name="Zuhaitz" />
    </div>
  );
};

export default App;
