import { css } from "@emotion/react";

export const layout = css`
    padding-top: 70px;
    /* background-color: #fafafa; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const boardTitle = css`
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0;
    width: 100%;
    border-bottom: 2px solid #dbdbdb;
    cursor: default;
`;

export const boardMain = css`
    box-sizing: border-box;
    border-bottom: 2px solid #dbdbdb;
    background-color: #fafafa;
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const boardContent = css`
    width: 98%;
    height: 96%;
`;
