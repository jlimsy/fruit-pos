import "./App.css";
import OrderPage from "../Order/OrderPage";
import OrderHistoryPage from "../Order/OrderHistoryPage";
import CheckoutPage from "../Order/CheckoutPage";
import AuthPage from "../Auth/AuthPage";
import { useState } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import SellerPage from "../Seller/SellerPage";
import AuthenticatedLayout from "@/layout/AuthenticatedLayout";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <Routes>
        {user ? (
          <Route
            element={<AuthenticatedLayout user={user} setUser={setUser} />}
          >
            <Route
              path="/orders/new"
              element={<OrderPage user={user} setUser={setUser} />}
            />
            <Route path="/orders/history" element={<OrderHistoryPage />} />
            <Route path="/orders/checkout" element={<CheckoutPage />} />
            <Route path="/seller/update" element={<SellerPage />} />
            <Route path="*" element={<Navigate to="/orders/new" replace />} />
          </Route>
        ) : (
          <Route path="*" element={<AuthPage setUser={setUser} />} />
        )}
      </Routes>
    </main>
  );
}

export default App;
