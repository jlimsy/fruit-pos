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
  const sellerNavigation = [
    {
      title: "Pending Orders",
      href: "/seller/pending",
      description: "View all pending orders",
    },
    {
      title: "Sales Dashboard",
      href: "/seller/dashboard",
      description: "View sales",
    },
    {
      title: "Update Inventory",
      href: "/seller/update",
      description: "Add new stocks or update existing stocks",
    },
  ];
  const handleLogOut = () => {
    setUser(userService.logOut());
  };

  return (
    <nav>
      <NavigationMenu className="bg-primary-foreground p-2 ">
        <NavigationMenuList>
          Welcome, {user.name}!
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
              <NavigationMenuTrigger>Seller</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-left">
                  {sellerNavigation.map((item) => (
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
          <NavigationMenuItem className="justify-right">
            <NavigationMenuLink href="" onClick={handleLogOut}>
              Log Out
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
