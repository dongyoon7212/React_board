/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useLoadList } from "../../hooks/boardListHook";
import * as S from "./style";
import { useParams } from "react-router-dom";

function Board() {
    const { boardId } = useParams();
    console.log(boardId);
    const { boardList } = useLoadList();
    const [boardTitle, setBoardTitle] = useState("");
    const [boardContent, setBoardContent] = useState("");

    const findBoard = boardList.filter(
        (board) => board.boardId === parseInt(boardId)
    )[0];
    console.log(findBoard.boardTitle);
    console.log(findBoard.boardContent);
    useEffect(() => {
        setBoardTitle(findBoard.boardTitle);
        setBoardContent(findBoard.boardContent);
    }, [findBoard]);
    return (
        <div css={S.layout}>
            <h1 css={S.boardTitle}>{boardTitle}</h1>
            <div css={S.boardMain}>
                <div
                    css={S.boardContent}
                    dangerouslySetInnerHTML={{ __html: boardContent }}
                ></div>
            </div>
        </div>
    );
}

export default Board;
