import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Dialog from "./Components/Dialog/Dialog";
import Preservation from "./Components/Preservation/Preservation";
import Incentives from "./Components/Incentives/Incentives";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ListExample from "./Components/ListExample/ListExample";


function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,          
        },
        {
          path: "/listExample",
          element: <ListExample />
        },
        {
          path: "/incentives",
          element: <Incentives />,
          children:[
            {
              path: "/incentives/spain",
              element: <p>Incentives SPAIN</p>          
            },
            {
              path: "/incentives/turkey",
              element: <p>Incentives TURKEY</p>          
            }
          ]
        },
        {
          path: "/login",
          element: <Login />,          
        },
        {
          path: "/dialog",
          element: <Dialog/>,          
        },
        {
          path: "/preservation",
          element: <Preservation/>,          
        },
        {
          path: "*",
          element: <Home />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
