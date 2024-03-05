import Board from "../pages/Board/Board";
import BoardList from "../pages/BoardList/BoardList";
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
        path: "/board/list",
        name: "게시판",
        params: {
            page: 1,
        },
        element: <BoardList />,
    },
    {
        id: 3,
        path: "/board/write",
        name: "글 작성하기",
        element: <BoardWrite />,
    },
    {
        id: 4,
        path: "/notice/:boardId",
        name: "공지사항",
        element: <Board />,
    },
    {
        id: 5,
        path: "/mypage",
        name: "마이페이지",
        element: <Mypage />,
    },
];
