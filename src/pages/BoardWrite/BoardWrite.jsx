/** @jsxImportSource @emotion/react */
import * as S from "./style";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constans/quillModules";
import { useMaxSizeValidateInput } from "../../hooks/inputTitleHook";
import { useQuillInput } from "../../hooks/quillHook";
import { useRef } from "react";

function BoardWrite() {
    const [inputValue, handleInputChange] = useMaxSizeValidateInput(20);
    const [quillValue, handleQuillChange] = useQuillInput();
    const boardIdRef = useRef(0);

    let newBoranList = [];
    const handleSubmitButtonClick = () => {
        const board = {
            boardId: boardIdRef.current + 1,
            boardTitle: inputValue,
            boardContent: quillValue,
        };
        newBoranList = [...newBoranList, board];
        console.log(boardIdRef.current);

        localStorage.setItem("boardList", JSON.stringify(newBoranList));
        alert("저장되었습니다.");
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
