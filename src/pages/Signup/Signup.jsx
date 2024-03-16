/** @jsxImportSource @emotion/react */
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import * as S from "./style";

function Signup(props) {
    const [usernameValue, handleUsernameChange] = useInput();
    const [passwordValue, handlePassowrdChange] = useInput();
    const [checkPasswordValue, handleCheckPasswordChange] = useInput();
    const [nameValue, handleNameChange] = useInput();
    const [emailValue, handleEmailChange] = useInput();
    return (
        <div css={S.layout}>
            <div css={S.signupBox}>
                <h1 css={S.signupTitle}>회원가입</h1>
                <div css={S.inputContainer}>
                    <AuthPageInput
                        type={"text"}
                        name={"username"}
                        placeholder={"사용자이름"}
                        value={usernameValue}
                        onChange={handleUsernameChange}
                    />
                    <AuthPageInput
                        type={"password"}
                        name={"password"}
                        placeholder={"비밀번호"}
                        value={passwordValue}
                        onChange={handlePassowrdChange}
                    />
                    <AuthPageInput
                        type={"password"}
                        name={"checkPassword"}
                        placeholder={"비밀번호 확인"}
                        value={checkPasswordValue}
                        onChange={handleCheckPasswordChange}
                    />
                    <AuthPageInput
                        type={"text"}
                        name={"name"}
                        placeholder={"이름"}
                        value={nameValue}
                        onChange={handleNameChange}
                    />
                    <AuthPageInput
                        type={"text"}
                        email={"email"}
                        placeholder={"이메일"}
                        value={emailValue}
                        onChange={handleEmailChange}
                    />
                </div>
                <button css={S.signupButton}>가입하기</button>
            </div>
        </div>
    );
}

export default Signup;
