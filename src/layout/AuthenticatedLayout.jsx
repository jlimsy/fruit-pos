import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function AuthenticatedLayout({ user, setUser }) {
  return (
    <div>
      <NavBar user={user} />
      <section className="mt-4">
        <Outlet />
      </section>
      <Toaster />
    </div>
  );
}
