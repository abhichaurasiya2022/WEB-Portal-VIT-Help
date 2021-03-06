var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    layout: "/admin",
  },
  {
    path: "/manageAdmin",
    name: "Manage Admin",
    icon: "ni ni-badge",
    layout: "/admin",
  },
{
    path: "/organizations",
    name: "List of Organizations",
    icon: "ni ni-single-02 text-yellow",
    layout: "/admin",
  },  
{
    path: "/requests",
    name: "Pending Requests",
    icon: "ni ni-bullet-list-67 text-red",
    layout: "/admin",
  },
/*  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    layout: "/auth",
  },*/
];
export default routes;
