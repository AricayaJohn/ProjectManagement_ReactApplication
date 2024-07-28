import App from "./App";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import EmployeesContainer from "../components/EmployeesContainer";

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
                element: <EmployeesContainer/>,
            }
        ]
    }
];

export default routes;