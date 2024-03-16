/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

function AuthPageInput({
    type,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    ref,
    message,
}) {
    return (
        <div css={S.inputBox}>
            <input
                css={S.input}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
            />
            {!!message && (
                <div css={S.inputIcon(message.type)}>
                    {message.type === "error" ? (
                        <MdErrorOutline />
                    ) : (
                        <MdCheckCircleOutline />
                    )}
                </div>
            )}
            {!!message && (
                <div css={S.messageBox(message.type)}>{message.text}</div>
            )}
        </div>
    );
}

export default AuthPageInput;
