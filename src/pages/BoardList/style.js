import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    width: 100%;
    /* height: 280px; */
`;

export const title = css`
    font-size: 30px;
    font-weight: 600;
    padding: 20px 0;
    width: 100%;
    border-bottom: 2px solid #dbdbdb;
    cursor: default;
`;

export const listLayout = css`
    box-sizing: border-box;
    border-bottom: 2px solid #dbdbdb;
    background-color: #fafafa;
    width: 100%;
    height: 70vh;
    overflow: hidden;
`;

export const listHeader = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;
    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 40px;
        font-weight: 700;
        cursor: default;
    }
    & > div:nth-of-type(1) {
        flex-grow: 0;
        border-right: 1px solid #dbdbdb;
        width: 100px;
    }
`;

export const boardListItem = css`
    color: #222;
    cursor: pointer;
    text-decoration: none;
    & > li {
        box-sizing: border-box;
        display: flex;
        border-bottom: 1px solid #dbdbdb;
        width: 100%;

        &:hover {
            background-color: #eee;
        }

        & > div {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            height: 40px;
        }

        & > div:nth-of-type(1) {
            flex-grow: 0;
            border-right: 1px solid #dbdbdb;
            width: 100px;
        }
    }
`;
