import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export default function AuthenticatedLayout({ user, setUser }) {
  return (
    <div>
      <NavBar user={user} />
      <section>
        <Outlet />
      </section>
    </div>
  );
}
