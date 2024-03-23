import React from "react";
import { Route, Routes } from "react-router-dom";
import { MENUS } from "../constants/menu";
import { useQuery } from "react-query";
import { getPricipalRequest } from "../apis/api/principal";
import { Reset } from "styled-reset";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import AuthPage from "../pages/AuthPage/AuthPage";
import Board from "../pages/Board/Board";

function AuthRoute(props) {
    const principalQuery = useQuery(["principalQuery"], getPricipalRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("onSuccess");
            console.log(response);
        },
        onError: (error) => {
            console.log("오류");
            console.log(error);
        },
    });

    return (
        <>
            <Reset />
            <Header />
            <SideBar />
            {principalQuery.isLoading ? (
                <>로딩중...</>
            ) : (
                <Routes>
                    {MENUS.map((menu) => (
                        <Route
                            path={menu.path}
                            element={menu.element}
                            key={menu.id}
                        />
                    ))}

                    <Route path={"/board/:boardId"} element={<Board />} />
                    <Route path="/auth/*" element={<AuthPage />} />
                </Routes>
            )}
        </>
    );
}

export default AuthRoute;
