import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Room from "./pages/Room";
import EditRoom from "./pages/EditRoom";
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
    path: "/room/edit",
    element: <EditRoom />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
