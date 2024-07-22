import { useEffect, useState } from "react";

const Greeting = ({ name = "Euralio" }) => {
  const [username, setUsername] = useState(name);

  useEffect(() => {
    setTimeout(() => setUsername("Alfonsina"), 3000);
  }, []);

  return (
    <div>
      <p>Hello {username}</p>
    </div>
  );
};

export default Greeting;
