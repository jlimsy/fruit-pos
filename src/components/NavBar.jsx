import { Link, NavLink } from "react-router-dom";
import * as userService from "../utilities/users-service";

export default function NavBar({ setUser }) {
  const handleLogOut = () => {
    setUser(userService.logOut());
  };

  return (
    <nav>
      <NavLink to="/orders/new">Create New Order</NavLink>
      <NavLink to="/orders/history">History</NavLink>
      <NavLink to="" onClick={handleLogOut}>
        Log Out
      </NavLink>
    </nav>
  );
}
