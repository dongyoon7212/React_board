import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import RootLayout from "./components/RootLayout/RootLayout";
import { MENUS } from "./constants/menu";
import Board from "./pages/Board/Board";
import Signup from "./pages/Signup/Signup";

function App() {
    return (
        <>
            <Reset />
            <Header />
            <SideBar />
            <RootLayout>
                <Routes>
                    {MENUS.map((menu) => (
                        <Route
                            path={menu.path}
                            element={menu.element}
                            key={menu.id}
                        />
                    ))}
                    <Route path={"/board/:boardId"} element={<Board />} />
                    <Route path="/auth/signup" element={<Signup />} />
                </Routes>
            </RootLayout>
        </>
    );
}

export default App;
