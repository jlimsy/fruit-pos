import "./App.css";
import OrderPage from "../Order/OrderPage";
import OrderHistoryPage from "../Order/OrderHistoryPage";
import CheckoutPage from "../Order/CheckoutPage";
import AuthPage from "../Auth/AuthPage";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import OwnerPage from "../Owner/OwnerPage";
import AuthenticatedLayout from "@/layout/AuthenticatedLayout";
import ViewOrdersPage from "../Owner/ViewOrdersPage";
import DashboardPage from "../Owner/DashboardPage";

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
            <Route path="/owner/update" element={<OwnerPage />} />
            <Route path="/owner/view" element={<ViewOrdersPage />} />
            <Route path="/owner/dashboard" element={<DashboardPage />} />

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
