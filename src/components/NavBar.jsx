import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/orders/new">Create New Order</NavLink>
      <NavLink to="/orders/history">History</NavLink>
    </nav>
  );
}
