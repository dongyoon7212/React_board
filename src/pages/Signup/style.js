import { css } from "@emotion/react";

export const layout = css`
    padding-top: 170px;
    width: 30%;
    margin: 0 auto;
`;

export const signupBox = css`
    width: 100%;
    height: 450px;
`;

export const signupTitle = css`
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0;
    width: 100%;
    border-bottom: 2px solid #dbdbdb;
    cursor: default;
`;

export const inputContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #dbdbdb;
    padding-bottom: 30px;
`;

export const signupButton = css`
    width: 100%;
    height: 40px;
    border: none;
    margin-top: 30px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #dbdbdb;
    }
`;
