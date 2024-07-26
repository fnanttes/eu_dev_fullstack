import "./App.css";
import { db } from "./firebase.js";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Header setUser={setUser} user={user}></Header>
    </div>
  );
}

export default App;
