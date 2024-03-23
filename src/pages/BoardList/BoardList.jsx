/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLoadListByPageNumber } from "../../hooks/boardListHook";
import * as S from "./style";
import { FaPencil } from "react-icons/fa6";
import { useAuthCheck } from "../../hooks/useAuthCheck";

const pageNumberLayout = (page) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    & > a {
        box-sizing: border-box;
        margin: 0px 3cappx;
        border: 1px solid #dbdbdb;
        padding: 3px;
        text-decoration: none;
        color: #222;
        font-weight: 700;
        &:nth-of-type(${page === 1 ? 1 : page % 5 === 0 ? 8 : (page % 5) + 3}) {
            background-color: #dbdbdb;
        }
    }
`;

function BoardList() {
    useAuthCheck();
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const { boardList, pageNumbers, pageNumberData } =
        useLoadListByPageNumber(page);
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        navigate("/board/write");
    };

    return (
        <div css={S.layout}>
            <div css={S.headerLayout}>
                <h1 css={S.title}>게시판</h1>
                <button css={S.headerButton} onClick={handleWriteButtonClick}>
                    <FaPencil css={S.headerButtonIcon} />
                </button>
            </div>
            <ul css={S.listLayout}>
                <li css={S.listHeader}>
                    <div>번호</div>
                    <div>제목</div>
                </li>
                {boardList.map((board) => (
                    <Link
                        css={S.boardListItem}
                        key={board.boardId}
                        to={`/board/${board.boardId}`}
                    >
                        <li>
                            <div>{board.boardId}</div>
                            <div>{board.boardTitle}</div>
                        </li>
                    </Link>
                ))}
            </ul>
            <div css={pageNumberLayout(page)}>
                {page !== 1 && (
                    <Link to={`/board/list?page=${1}`}>처음으로</Link>
                )}
                {page !== 1 && (
                    <Link
                        to={`/board/list?page=${
                            pageNumberData?.startPageNumber - 5 < 0
                                ? 1
                                : pageNumberData?.startPageNumber - 5
                        }`}
                    >
                        &#171;
                    </Link>
                )}
                {page !== 1 && (
                    <Link to={`/board/list?page=${page - 1}`}>&#60;</Link>
                )}
                {pageNumbers.map((pageNumber) => (
                    <Link
                        key={pageNumber}
                        to={`/board/list?page=${pageNumber}`}
                    >
                        {pageNumber}
                    </Link>
                ))}
                {page !== pageNumberData?.totalPageCount && (
                    <Link to={`/board/list?page=${page + 1}`}>&#62;</Link>
                )}
                {page !== pageNumberData?.totalPageCount && (
                    <Link
                        to={`/board/list?page=${
                            pageNumberData?.startPageNumber + 5
                        }`}
                    >
                        &#187;
                    </Link>
                )}
                {page !== pageNumberData?.totalPageCount && (
                    <Link
                        to={`/board/list?page=${pageNumberData?.totalPageCount}`}
                    >
                        마지막으로
                    </Link>
                )}
            </div>
        </div>
    );
}

export default BoardList;
