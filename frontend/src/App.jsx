import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing, Home } from "./pages";
import Layout from "./layouts/Layout";
import AddFriendForm from "./components/AddFriendForm";
import Friends from "./pages/Friends";
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
        {
          path: "/add-friend",
          element: <AddFriendForm />,
        },
        {
          path: "/friends",
          element: <Friends />,
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
