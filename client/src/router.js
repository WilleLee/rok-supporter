import { createBrowserRouter } from "react-router-dom";
// views 👇🏻
// root
import Root from "./pages/Root";
import HomePage from "./pages";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import AdminLoginPage from "./pages/AdminLoginPage";
// events/
import EventPage from "./pages/events";
import AddEventPage from "./pages/events/AddEventPage";
// tools/
import CommandersPage from "./pages/CommandersPage";
import HpCalculatorPage from "./pages/tools/HpCalculatorPage";
import ResourcePage from "./pages/tools/ResourcePage";
import TroopPowerPage from "./pages/tools/TroopPowerPage";
//
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
      { path: "events/add-event", element: <AddEventPage /> },
      { path: "commanders", element: <CommandersPage /> },
      { path: "tools/troop-power", element: <TroopPowerPage /> },
      { path: "tools/resource", element: <ResourcePage /> },
      { path: "tools/hp-calculator", element: <HpCalculatorPage /> },
      { path: "test", element: <TestPage /> },
    ],
  },
]);

export default router;
