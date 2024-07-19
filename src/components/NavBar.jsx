import { Link, NavLink } from "react-router-dom";
import * as userService from "../utilities/users-service";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ListItem,
} from "@/components/ui/navigation-menu";

export default function NavBar({ user, setUser }) {
  const ownerNavigation = [
    {
      title: "Pending Orders",
      href: "/owner/view",
      description: "View all orders",
    },
    {
      title: "Sales Dashboard",
      href: "/owner/dashboard",
      description: "View sales",
    },
    {
      title: "Update Inventory",
      href: "/owner/update",
      description: "Add new stocks or update existing stocks",
    },
  ];
  const handleLogOut = () => {
    setUser(userService.logOut());
  };

  return (
    <nav>
      <NavigationMenu className="bg-accent p-4 ">
        <NavigationMenuList className="flex w-screen px-10 justify-between">
          <div>
            <p>Welcome, {user.name}!</p>
          </div>
          <div className="flex gap-10 items-center">
            {" "}
            <NavigationMenuItem>
              <NavigationMenuLink href="/orders/new">
                Create New Order
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/orders/history">
                Order History
              </NavigationMenuLink>
            </NavigationMenuItem>
            {user.role === "owner" && (
              <NavigationMenuItem>
                <NavigationMenuTrigger>Owner</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {ownerNavigation.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}
          </div>

          <NavigationMenuItem>
            <NavigationMenuLink href="" onClick={handleLogOut}>
              Log Out
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
