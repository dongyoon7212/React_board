/** @jsxImportSource @emotion/react */
import * as S from "./style";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";
import { useMaxSizeValidateInput } from "../../hooks/inputTitleHook";
import { useQuillInput } from "../../hooks/quillHook";
import { useLoadListByPageNumber } from "../../hooks/boardListHook";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuthCheck } from "../../hooks/useAuthCheck";

function BoardWrite() {
    useAuthCheck();
    const [inputValue, handleInputChange] = useMaxSizeValidateInput(20);
    const [quillValue, handleQuillChange] = useQuillInput();
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"));
    const { pageNumberData } = useLoadListByPageNumber(page);
    const navigate = useNavigate();

    const handleSubmitButtonClick = () => {
        const board = {
            boardTitle: inputValue,
            boardContent: quillValue,
        };

        addBoardRequest(board);

        alert("저장되었습니다.");
        navigate(`/board/list?page=${pageNumberData.endPageNumber}`);
    };

    const addBoardRequest = async (board) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/board",
                board
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div css={S.layout}>
            <h1>글 작성하기</h1>
            <input
                type="text"
                placeholder="제목"
                onChange={handleInputChange}
                value={inputValue}
            />
            <div>
                <ReactQuill
                    style={{ width: "100%", height: "55vh" }}
                    modules={QUILL_MODULES}
                    onChange={handleQuillChange}
                />
                <button css={S.submitButton} onClick={handleSubmitButtonClick}>
                    저장하기
                </button>
            </div>
        </div>
    );
}

export default BoardWrite;
