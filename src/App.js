import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import RootLayout from "./components/RootLayout/RootLayout";
import { MENUS } from "./constans/menu";

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
                </Routes>
            </RootLayout>
        </>
    );
}

export default App;
