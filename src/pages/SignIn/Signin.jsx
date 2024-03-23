/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";
import * as S from "./style";
import { signinRequest } from "../../apis/api/signin";
function Signin(props) {
    const [username, usernameChange] = useInput();
    const [password, passwordChange] = useInput();
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate("/auth/signup");
    };

    const handleSigninClick = () => {
        signinRequest({
            username,
            password,
        })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    const accessToken = response.data;
                    localStorage.setItem("AccessToken", accessToken);
                    window.location.replace("/");
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    const errorMap = error.response.data;
                    alert(errorMap);
                } else {
                    alert("로그인 오류");
                }
            });
    };

    return (
        <div css={S.layout}>
            <div css={S.signinBox}>
                <h1 css={S.signinTitle}>로그인</h1>
                <div css={S.inputContainer}>
                    <AuthPageInput
                        type={"text"}
                        name={"username"}
                        placeholder={"사용자이름"}
                        value={username}
                        onChange={usernameChange}
                    />
                    <AuthPageInput
                        type={"password"}
                        name={"password"}
                        placeholder={"비밀번호"}
                        value={password}
                        onChange={passwordChange}
                    />
                </div>
                <button css={S.signinButton} onClick={handleSigninClick}>
                    로그인
                </button>
                <button css={S.signupButton} onClick={handleSignupClick}>
                    회원가입
                </button>
            </div>
        </div>
    );
}

export default Signin;
