// lib/sidebarMenu.js
export const sidebarMenu = [
  {
    section: "Dashboard",
    items: [
      { name: "Dashboard", href: "/dashboard", key: "dashboard" },
      { name: "Analytics", href: "/dashboard/analytics", key: "analytics" },
    ],
  },
  {
    section: "Management",
    items: [
      { name: "Orders", href: "/orders", key: "orders" },
      { name: "Users", href: "/users", key: "users" },
    ],
  },
  {
    section: "Settings",
    items: [
      { name: "Profile", href: "/settings/profile", key: "profile" },
      { name: "Security", href: "/settings/security", key: "security" },
    ],
  },
];
