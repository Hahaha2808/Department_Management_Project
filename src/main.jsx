import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Authentication from "./pages/Authentication";
import Room from "./pages/Room";
import AddRoomForm from "./components/AddRoomForm";
import Service from "./pages/Service";
import ServiceForm from "./pages/ServiceForm";
import AddCustomerForm from "./components/AddCustomerForm";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Home></Home>
  },
  {
    path: "/auth",
    element: 
    <>
      <Authentication></Authentication>
    </>
  },
  {
    path: "/rooms",
    element: <Room />,
  },
  {
    path: "/rooms/add",
    element: <AddRoomForm />,
  },
  { path: "/service", element: <Service /> },
  { path: "/service/edit", element: <ServiceForm /> },
  { path: "/add-customer/:roomId", element: <AddCustomerForm /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
