import BoardWrite from "../pages/BoardWrite/BoardWrite";
import Home from "../pages/Home/Home";
import Mypage from "../pages/Mypage/Mypage";

export const MENUS = [
    {
        id: 1,
        path: "/",
        name: "홈",
        element: <Home />,
    },
    {
        id: 2,
        path: "/board",
        name: "게시판",
        element: <>게시판</>,
    },
    {
        id: 3,
        path: "/board/write",
        name: "글 작성하기",
        element: <BoardWrite />,
    },
    {
        id: 4,
        path: "/notice",
        name: "공지사항",
        element: <>공지사항</>,
    },
    {
        id: 5,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />,
    },
];
