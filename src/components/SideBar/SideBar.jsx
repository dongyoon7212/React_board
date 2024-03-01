/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as S from "./sideBar_style";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import { MENUS } from "../../constans/menu";

function SideBar() {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <aside css={S.layout(isShow)}>
                <button css={S.toggleButton} onClick={() => setIsShow(!isShow)}>
                    {isShow ? <FaCaretLeft /> : <FaCaretRight />}
                </button>
                <h1 css={S.menuTitle}>MENU</h1>
                <ul css={S.menuList}>
                    {MENUS.map((menu) => (
                        <Link
                            css={S.menuItem}
                            to={menu.path}
                            key={menu.id}
                            onClick={() => setIsShow(false)}
                        >
                            <li>{menu.name}</li>
                        </Link>
                    ))}
                </ul>
            </aside>
        </>
    );
}

export default SideBar;