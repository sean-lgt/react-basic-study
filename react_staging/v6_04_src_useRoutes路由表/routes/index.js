import About from "../pages/About";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to="/about" />,
  },
]