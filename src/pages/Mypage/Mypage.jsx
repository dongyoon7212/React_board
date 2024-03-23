/** @jsxImportSource @emotion/react */
import { useQueryClient } from "react-query";
import * as S from "./style";
import { useRef, useState } from "react";
import { useAuthCheck } from "../../hooks/useAuthCheck";

function Mypage() {
    useAuthCheck();
    const [isShow, setIsShow] = useState(false);
    const [preview, setPreview] = useState("");
    const imgFileRef = useRef();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();

        if (e.target.files.length === 0) {
            return;
        }

        fileReader.onload = (e) => {
            setPreview(e.target.result);
        };

        fileReader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div css={S.layout}>
            <h1>마이페이지</h1>
            <div css={S.profileHeader}>
                <div
                    css={S.profileImgLayout}
                    onClick={() => imgFileRef.current.click()}
                >
                    <img src={preview} alt="" />
                    <input
                        style={{ display: "none" }}
                        type="file"
                        ref={imgFileRef}
                        onChange={handleImgFileChange}
                    />
                </div>
                <h3>{principalData?.data?.username}</h3>
                <div css={S.profileInfoLayout}>
                    <div css={S.profileInfo}>
                        <h3>이메일</h3>
                        <p>{principalData?.data?.email}</p>
                    </div>
                </div>
                <button onClick={() => setIsShow(!isShow)}>수정하기</button>
            </div>
            <div css={S.profileMain(isShow)}>
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" required />
                    <label>닉네임</label>
                    <span></span>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" required />
                    <label>이메일</label>
                    <span></span>
                </div>
                <button css={S.saveButton} onClick={() => setIsShow(!isShow)}>
                    저장하기
                </button>
            </div>
        </div>
    );
}

export default Mypage;
