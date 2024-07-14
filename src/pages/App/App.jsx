import "./App.css";
import OrderPage from "../Order/OrderPage";
import OrderHistoryPage from "../Order/OrderHistoryPage";
import CheckoutPage from "../Order/CheckoutPage";
import AuthPage from "../Auth/AuthPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import SellerPage from "../Seller/SellerPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route
            path="/orders/new"
            element={<OrderPage user={user} setUser={setUser} />}
          />
          <Route path="/orders/history" element={<OrderHistoryPage />} />
          <Route path="/orders/checkout" element={<CheckoutPage />} />
          <Route path="/seller/update" element=<SellerPage /> />
        </Routes>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
