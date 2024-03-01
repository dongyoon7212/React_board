import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const mainTitle = css`
    font-size: 45px;
    font-weight: 700;
`;

export const mainButton = css`
    font-size: 30px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    margin-top: 70px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #000000bf;
    }
    &:active {
        background-color: #000000a3;
    }

    & > div {
        margin-right: 5px;
    }

    & > div > svg {
        width: 25px;
        height: 25px;
    }
`;
