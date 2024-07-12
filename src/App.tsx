import "./App.css";
import { useState, useEffect } from "react";
import User from "./components/User";
import { UserInterface } from "./interface/User";

function App() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState<UserInterface>();
  const increment = () => {
    setCounter((prev: any) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev: any) => prev - 1);
  };
  useEffect(() => {
    const fetchUser = async () => {
      await fetch("https://randomuser.me/api")
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            const res = data.results[0];
            setUser({
              firstName: res.name.first,
              lastName: res.name.last,
              city: res.location.city,
              country: res.location.country,
              state: res.location.state,
            });
          }
        });
    };
    fetchUser();
  }, []);

  //TASK 1 COUNTER

  //TEST 2 FETCHING USER
  // https://randomuser.me/api

  //TEST 3 FETCHING USER WITH PAGINATION
  // https://randomuser.me/api?page=1&result=1

  return (
    <div className="App">
      <p>COUNTER: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <User user={user} />
      <hr />
    </div>
  );
}

export default App;
