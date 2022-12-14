import { createBrowserRouter } from "react-router-dom";
// views 👇🏻
// root
import Root from "./pages/Root";
import HomePage from "./pages";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import KingsMessagePage from "./pages/KingsMessagePage";
// news/
import NewsPage from "./pages/news";
import AddNewsPage from "./pages/news/AddNewsPage";
// tools/
import HpCalculatorPage from "./pages/tools/HpCalculatorPage";
import ResourcePage from "./pages/tools/ResourcePage";
import TroopPowerPage from "./pages/tools/TroopPowerPage";
// commanders/
import CommandersPage from "./pages/commanders";
import CommanderPage from "./pages/commanders/CommanderPage";
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
      { path: "kings-message", element: <KingsMessagePage /> },
      { path: "news", element: <NewsPage /> },
      { path: "news/add-news", element: <AddNewsPage /> },
      { path: "commanders", element: <CommandersPage /> },
      { path: "commanders/:id", element: <CommanderPage /> },
      { path: "tools/troop-power", element: <TroopPowerPage /> },
      { path: "tools/resource", element: <ResourcePage /> },
      { path: "tools/hp-calculator", element: <HpCalculatorPage /> },
      { path: "test", element: <TestPage /> },
    ],
  },
]);

export default router;
