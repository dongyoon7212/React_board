/** @jsxImportSource @emotion/react */
import * as S from "./header_style";

function Header() {
    return (
        <>
            <header css={S.header}>
                <div></div>
                <h1 css={S.headerTitle}>마음의 소리</h1>
                <button css={S.sideBarButton}>로그인</button>
            </header>
        </>
    );
}

export default Header;
