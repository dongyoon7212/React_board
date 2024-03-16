import { css } from "@emotion/react";

export const inputBox = css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-top: 25px;
`;

export const input = css`
    box-sizing: border-box;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 10px 30px 10px 10px;
    width: 100%;
    background-color: white;
    font-size: 14px;
    cursor: pointer;

    &:focus {
        background-color: #fafafa;
    }
`;
