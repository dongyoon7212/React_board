/** @jsxImportSource @emotion/react */
import * as S from "./style";

function AuthPageInput({ type, name, placeholder, value, onChange }) {
    return (
        <div css={S.inputBox}>
            <input
                css={S.input}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default AuthPageInput;
