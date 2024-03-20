/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as S from "./header_style";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import instance from "../../apis/utils/instance";

function Header() {
    const [isLogin, setLogin] = useState();
    const queryClient = useQueryClient();
    const principalQueryStatus = queryClient.getQueryState("principalQuery");
    const navigate = useNavigate();

    useEffect(() => {
        setLogin(() => principalQueryStatus.status === "success");
        console.log(isLogin);
    }, [principalQueryStatus.status]);

    const handleSigninClick = () => {
        navigate("/auth/signin");
    };

    const handleTitleClick = () => {
        navigate("/");
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.refetchQueries("principalQuery");
        navigate("/");
    };

    return (
        <>
            <header css={S.header}>
                <div></div>
                <h1 css={S.headerTitle} onClick={handleTitleClick}>
                    Board
                </h1>
                {isLogin ? (
                    <button css={S.sideBarButton} onClick={handleLogoutClick}>
                        로그아웃
                    </button>
                ) : (
                    <button css={S.sideBarButton} onClick={handleSigninClick}>
                        로그인
                    </button>
                )}
            </header>
        </>
    );
}

export default Header;
