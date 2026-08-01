"use client";

import { usePathname } from "next/navigation";
import Unauthorized from "./Unauthorized"; // Make sure this file exists

const ClientWrapper = ({ children }) => {
  // ✅ Local permission list (replace with API response later if needed)
  const permissions = ["view_home", "", "view_users"];

  const pathname = usePathname();

  // ✅ Map of routes that require permission
  const protectedRoutes = {
    "/users": "view_users",
    "/dashboard": "view_dashboard",
    "/about": "view_about",
    "/": "view_home",
  };

  const requiredPermission = protectedRoutes[pathname];

  const isAuthorized =
    !requiredPermission || permissions.includes(requiredPermission);

  return isAuthorized ? children : <Unauthorized />;
};

export default ClientWrapper;
