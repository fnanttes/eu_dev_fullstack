import "./App.css";
import { useState, useEffect } from "react";
// import { db } from "./firebase.js"; // Comente ou remova esta linha se não estiver usando ainda
import Header from "./Header";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Header setUser={setUser} user={user} />
    </div>
  );
}

export default App;
