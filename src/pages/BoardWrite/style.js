import { css } from "@emotion/react";

export const layout = css`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* background-color: #fafafa; */

    & > h1 {
        font-size: 30px;
        font-weight: 600;
        padding: 20px 0;
        width: 100%;
        border-bottom: 2px solid #dbdbdb;
        cursor: default;
    }

    & > input {
        margin: 10px 0px;
        padding: 5px 5px;
        height: 40px;
        font-size: 25px;
        outline: none;
        border: none;
        border-bottom: 2px solid #dbdbdb;
    }
`;

export const submitButton = css`
    box-sizing: border-box;
    margin-top: 52px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eee;
    }
`;
