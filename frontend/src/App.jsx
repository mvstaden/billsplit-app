import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Landing, Settings, Account } from "./pages";
import Layout from "./layouts/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/home",
          element: <Home />,
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
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
