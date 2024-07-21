import App from "./App";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import EmployeesCard from "../components/EmployeesCard";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/employee/:id",
                element: <EmployeesCard />,
            }
        ]
    }
];

export default routes;