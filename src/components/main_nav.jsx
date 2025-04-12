import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Car, FileText, CreditCard, Settings, Map, CheckSquare } from 'lucide-react';

const MainNav = () => {
  const location = useLocation();

  const routes = [
    { href: "/", label: "Dashboard", icon: Home, active: location.pathname === "/" },
    { href: "/customers", label: "Customers", icon: Users, active: location.pathname === "/customers" },
    { href: "/vehicles", label: "Vehicles", icon: Car, active: location.pathname === "/vehicles" },
    { href: "/rentals", label: "Rentals", icon: FileText, active: location.pathname === "/rentals" },
    { href: "/documents", label: "Documents", icon: CheckSquare, active: location.pathname === "/documents" },
    { href: "/tracking", label: "Tracking", icon: Map, active: location.pathname === "/tracking" },
    { href: "/finance", label: "Finance", icon: CreditCard, active: location.pathname === "/finance" },
    { href: "/settings", label: "Settings", icon: Settings, active: location.pathname === "/settings" },
  ];

  return (
    <nav className="flex items-center text-[#e8e7e78f] bg-[#0f0f0f] space-x-4 lg:space-x-6 py-6 px-5 border-b ">
      {routes.map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${route.active ? "text-white" : "text-muted-foreground"}`}
        >
          <route.icon className="mr-2 h-4 w-4" />
          <span className="hidden md:inline-block">{route.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
