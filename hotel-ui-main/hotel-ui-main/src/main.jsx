import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Room from "./pages/Room";
import RoomForm from "./pages/RoomForm";
import Service from "./pages/Service";
import ServiceForm from "./pages/ServiceForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/room/add",
    element: <RoomForm />,
  },
  { path: "/service", element: <Service /> },
  { path: "/service/edit", element: <ServiceForm /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
