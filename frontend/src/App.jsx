// import { useState } from "react"; // Added missing import
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainLayout from "./components/MainLayout";
// import Home from "./components/Home";
// import Profile from "./components/Profile";

// const browserRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
// ]);

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <RouterProvider router={browserRouter} />
//     </>
//   );
// }

// export default App;


import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Profile from "./components/Profile";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // Default route for "/"
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;