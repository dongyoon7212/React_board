import React from "react";
import { Route, Routes } from "react-router-dom";
import { MENUS } from "../constants/menu";
import Board from "../pages/Board/Board";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/SignIn/Signin";
import { useQuery } from "react-query";
import { getPricipalRequest } from "../apis/api/principal";
import { Reset } from "styled-reset";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

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
            <Routes>
                {principalQuery.isLoading ? (
                    <></>
                ) : (
                    <>
                        {MENUS.map((menu) => (
                            <Route
                                path={menu.path}
                                element={menu.element}
                                key={menu.id}
                            />
                        ))}
                        <Route path={"/board/:boardId"} element={<Board />} />
                        <Route path="/auth/signup" element={<Signup />} />
                        <Route path="/auth/signin" element={<Signin />} />
                    </>
                )}
            </Routes>
        </>
    );
}

export default AuthRoute;
