/** @jsxImportSource @emotion/react */
import * as S from "./style";

function Board() {
    return (
        <div css={S.layout}>
            <h1 css={S.boardTitle}>제목</h1>
            <div css={S.boardMain}>
                <div css={S.boardContent}>내용입니다.</div>
            </div>
        </div>
    );
}

export default Board;
