/** @jsxImportSource @emotion/react */
import * as S from "./style";
import img from "./bio-photo.jpg";
import { useState } from "react";

function Mypage() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div css={S.layout}>
            <h1>마이페이지</h1>
            <div css={S.profileHeader}>
                <img src={img} alt="" />
                <h3>dongyoon</h3>
                <div css={S.profileInfoLayout}>
                    <div css={S.profileInfo}>
                        <h3>이메일</h3>
                        <p>dongyoon7212@naver.com</p>
                    </div>
                    <div css={S.profileInfo}>
                        <h3>생년월일</h3>
                        <p>1999.02.26</p>
                    </div>
                    <div css={S.profileInfo}>
                        <h3>주소</h3>
                        <p>부산광역시 사하구</p>
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
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" required />
                    <label>생년월일</label>
                    <span></span>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} type="text" required />
                    <label>주소</label>
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
