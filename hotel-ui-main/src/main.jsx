import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Home from "./pages/Home.jsx";
import Room from "./pages/Room";
import AddRoomForm from "./components/AddRoomForm";
import EditRoomForm from "./components/EditRoomForm";
import Service from "./pages/Service";
import ServiceForm from "./pages/ServiceForm";
import AddCustomerForm from "./components/AddCustomerForm";
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Authentication />,
  },
  {
    path: "/home",
    element: (
      <>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/rooms",
    element: <Room />,
  },
  {
    path: "/rooms/add",
    element: <AddRoomForm />,
  },
  { path: "/rooms/edit/:id", element: <EditRoomForm /> },
  { path: "/add-customer/:Id", element: <AddCustomerForm /> },
  { path: "/service", element: <Service /> },
  { path: "/service/edit", element: <ServiceForm /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
