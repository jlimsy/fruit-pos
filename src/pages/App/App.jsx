import "./App.css";
import OrderPage from "../Order/OrderPage";
import OrderHistoryPage from "../Order/OrderHistoryPage";
import CheckoutPage from "../Order/CheckoutPage";
import AuthPage from "../Auth/AuthPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route path="/orders/new" element={<OrderPage />} />
          <Route path="/orders/history" element={<OrderHistoryPage />} />
          <Route path="/orders/checkout" element={<CheckoutPage />} />
        </Routes>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
