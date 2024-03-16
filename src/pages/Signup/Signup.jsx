/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import * as S from "./style";

function Signup(props) {
    const [
        username,
        usernameChange,
        usernameMessage,
        setUsernameValue,
        setUsernameMessage,
    ] = useInput("username");
    const [password, passwordChange, passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [name, nameChange, nameMessage] = useInput("name");
    const [email, emailChange, emailMessage] = useInput("email");
    const [checkPasswordMessage, setCheckPasswordMessage] = useState(null);

    useEffect(() => {
        if (!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }

        if (checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: "",
                };
            });
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다.",
                };
            });
        }
    }, [checkPassword, password]);

    const handleSignupSubmit = () => {
        const checkFlags = [
            usernameMessage?.type,
            passwordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            emailMessage?.type,
        ];

        if (
            checkFlags.includes("error") ||
            checkFlags.includes(undefined) ||
            checkFlags.includes(null)
        ) {
            alert("회원가입 정보를 확인해주세요.");
            return;
        }
    };

    return (
        <div css={S.layout}>
            <div css={S.signupBox}>
                <h1 css={S.signupTitle}>회원가입</h1>
                <div css={S.inputContainer}>
                    <AuthPageInput
                        type={"text"}
                        name={"username"}
                        placeholder={"사용자이름"}
                        value={username}
                        onChange={usernameChange}
                        message={usernameMessage}
                    />
                    <AuthPageInput
                        type={"password"}
                        name={"password"}
                        placeholder={"비밀번호"}
                        value={password}
                        onChange={passwordChange}
                        message={passwordMessage}
                    />
                    <AuthPageInput
                        type={"password"}
                        name={"checkPassword"}
                        placeholder={"비밀번호 확인"}
                        value={checkPassword}
                        onChange={checkPasswordChange}
                        message={checkPasswordMessage}
                    />
                    <AuthPageInput
                        type={"text"}
                        name={"name"}
                        placeholder={"이름"}
                        value={name}
                        onChange={nameChange}
                        message={nameMessage}
                    />
                    <AuthPageInput
                        type={"text"}
                        email={"email"}
                        placeholder={"이메일"}
                        value={email}
                        onChange={emailChange}
                        message={emailMessage}
                    />
                </div>
                <button css={S.signupButton}>가입하기</button>
            </div>
        </div>
    );
}

export default Signup;
