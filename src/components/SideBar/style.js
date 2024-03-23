import { css } from "@emotion/react";

export const layout = (isShow) => css`
    z-index: 100;
    box-sizing: border-box;
    position: fixed;
    width: 300px;
    height: 100%;
    background-color: white;
    top: 0;
    left: ${isShow ? "0px" : "-300px"};
    border-right: 1px solid #dbdbdb;
    box-shadow: 1px 0px 3px #00000022;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: left 0.5s ease-in-out;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 25px;
    height: 50px;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;

export const menuTitle = css`
    width: 100%;
    height: 70px;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`;

export const menuList = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    /* padding: 10px 20px; */
`;

export const menuItem = css`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    font-size: 20px;
    text-decoration: none;
    font-weight: 700;
    color: black;
    cursor: pointer;
    &:nth-of-type(1) {
        border-top: 3px solid #dbdbdb;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
