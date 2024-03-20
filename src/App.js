import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import RootLayout from "./components/RootLayout/RootLayout";
import { MENUS } from "./constants/menu";
import Board from "./pages/Board/Board";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/SignIn/Signin";
import AuthRoute from "./routes/AuthRoute";

function App() {
    return (
        <>

            <RootLayout>
                <AuthRoute />
            </RootLayout>
        </>
    );
}

export default App;
