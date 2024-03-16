/** @jsxImportSource @emotion/react */
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import * as S from "./style";

function Signup(props) {
    return (
        <div css={S.layout}>
            <div css={S.signupBox}>
                <h1 css={S.signupTitle}>회원가입</h1>
                <div css={S.inputContainer}>
                    <AuthPageInput
                        type={"text"}
                        name={"username"}
                        placeholder={"사용자이름"}
                        value={null}
                        onChange={null}
                    />
                    <AuthPageInput />
                    <AuthPageInput />
                    <AuthPageInput />
                    <AuthPageInput />
                </div>
                <button>가입하기</button>
            </div>
        </div>
    );
}

export default Signup;
