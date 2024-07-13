import "./App.css";
import Order from "../Order/OrderPage";
import OrderHistory from "../Order/OrderHistoryPage";
import Auth from "../Auth/AuthPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route path="/orders/new" element={<Order />} />
          <Route path="/orders/history" element={<OrderHistory />} />
          <Route path="/orders/checkout" element={<OrderHistory />} />
        </Routes>
      ) : (
        <Auth />
      )}
    </main>
  );
}

export default App;
