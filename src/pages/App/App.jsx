import "./App.css";
import Order from "../Order/Order";
import Auth from "../Auth/Auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return <main className="App">{user ? <Order /> : <Auth />}</main>;
}

export default App;
