import Cart from "../../components/Order/Cart";
import NavBar from "../../components/NavBar";

export default function OrderPage({ user, setUser }) {
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Cart />
    </div>
  );
}
