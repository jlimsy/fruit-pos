import Cart from "../../components/Cart";
import NavBar from "../../components/NavBar";

export default function OrderPage({ user, setUser }) {
  return (
    <div>
      Order hello {user.name}
      <NavBar setUser={setUser} />
      <Cart />
    </div>
  );
}
