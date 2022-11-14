import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import ErrorPage from "./pages/ErrorPage";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";
import ResourcePage from "./pages/ResourcePage";
import Root from "./pages/Root";
import TroopPowerPage from "./pages/TroopPowerPage";
import TestPage from "./test/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "admin-login", element: <AdminLoginPage /> },
      { path: "events", element: <EventPage /> },
      { path: "tools/troop-power", element: <TroopPowerPage /> },
      { path: "tools/resource", element: <ResourcePage /> },
      {path: "test", element: <TestPage />}
    ],
  },
]);

export default router;
