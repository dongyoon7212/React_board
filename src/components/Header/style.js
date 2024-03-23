import { css } from "@emotion/react";

export const header = css`
    z-index: 99;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    border-bottom: 3px solid #dbdbdb;
    box-shadow: 1px 0px 5px #00000033;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
`;

export const headerTitle = css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    font-weight: 600;
    cursor: pointer;
`;

export const sideBarButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
    border: none;
    background-color: white;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;
