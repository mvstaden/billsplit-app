import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing, Home } from "./pages";
import Layout from "./layouts/Layout";
<Layout />;

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

        // {
        //   path: "settings",
        //   element: <Settings />,
        // },
        // {
        //   path: "account",
        //   element: <Account />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
