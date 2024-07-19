import "./App.css";
import { db } from "./firebase.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(db);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
