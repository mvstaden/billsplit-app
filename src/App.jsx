import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Home, LandingPage, Settings, Account } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "landingpage",
        element: <LandingPage />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
