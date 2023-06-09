import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login"
import Incentives from "./Components/Incentives/Incentives";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,          
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
