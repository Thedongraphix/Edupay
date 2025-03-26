const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Dashboard",
    path: "/dashboard",
    newTab: false,
  },
  {
    id: 3,
    title: "Payment",
    path: "/payment",
    newTab: false,
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 62,
        title: "Payment History",
        path: "/dashboard/payment-history",
        newTab: false,
      },
    ],
  },
];

export default menuData; 