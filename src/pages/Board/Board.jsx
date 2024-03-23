/** @jsxImportSource @emotion/react */
import {
    useLoadList,
    useLoadListByPageNumber,
} from "../../hooks/boardListHook";
import * as S from "./style";
import { useParams } from "react-router-dom";

function Board() {
    const { boardId } = useParams();
    const { loadBoardList } = useLoadListByPageNumber();
    const { findBoard } = useLoadList(loadBoardList, boardId);

    return (
        <div css={S.layout}>
            <h1 css={S.boardTitle}>{findBoard?.boardTitle}</h1>
            <div css={S.boardMain}>
                <div
                    css={S.boardContent}
                    dangerouslySetInnerHTML={{
                        __html: findBoard?.boardContent,
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Board;
