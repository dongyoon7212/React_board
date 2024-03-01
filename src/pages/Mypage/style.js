import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* align-items: center; */
    /* background-color: #dbdbdb; */

    & > h1 {
        font-size: 30px;
        font-weight: 600;
        padding: 20px 0;
        width: 100%;
        border-bottom: 2px solid #dbdbdb;
        cursor: default;
    }
`;

export const profileHeader = css`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: #fafafa;
    border-bottom: 2px solid #dbdbdb;

    & > h3 {
        position: absolute;
        top: 40px;
        left: 310px;
        font-size: 35px;
        font-weight: 500;
        padding-bottom: 5px;
        border-bottom: 2px solid #dbdbdb;
        cursor: default;
    }

    & > button {
        position: absolute;
        right: 30px;
        bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        background-color: white;
        border: 1px solid #dbdbdb;
        padding: 5px 10px;

        &:hover {
            background-color: #fafafa;
        }

        &:active {
            background-color: #eee;
        }
    }
`;

export const profileImgLayout = css`
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #dbdbdb;
    margin-left: 25px;
    transition: all 0.2s ease-in-out;

    & > img {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        background-color: white;
    }
    &:hover {
        width: 280px;
        height: 280px;
        margin-left: 10px;
        transition: all 0.2s ease-in-out;
        border: 2px solid #aaaaaa;

    }
`;

export const profileInfoLayout = css`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    top: 100px;
    left: 310px;
`;

export const profileInfo = css`
    margin-top: 30px;
    & > h3 {
        font-size: 25px;
        font-weight: 500;
        border-bottom: 2px solid #dbdbdb;
        padding-bottom: 5px;
        cursor: default;
    }

    & > p {
        padding-top: 5px;
        font-size: 20px;
        font-weight: 400;
        cursor: default;
    }
`;

export const profileMain = (isShow) => css`
    width: 100%;
    height: ${isShow ? "150px" : "0px"};
    padding-top: ${isShow ? "20px" : "0px"};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fafafa;
    transition: all 0.3s ease-in-out;
    position: relative;

    & > div,
    & > button {
        visibility: ${isShow ? "visible" : "hidden"};
        opacity: ${isShow ? "1" : "0"};
        transition: opacity 0.3s ease-in-out;
    }
`;

export const inputBox = css`
    position: relative;
    width: 300px;
    margin-left: 50px;

    & > span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0%; /* right로만 바꿔주면 오 - 왼 */
        background-color: #666;
        width: 0;
        height: 2px;
        border-radius: 2px;
        transition: 0.5s;
    }

    & > label {
        position: absolute;
        color: #aaa;
        left: 10px;
        font-size: 20px;
        bottom: 8px;
        transition: all 0.2s;
    }

    & > input:focus ~ label,
    & > input:valid ~ label {
        font-size: 16px;
        bottom: 40px;
        color: #666;
        font-weight: bold;
    }
    & > input:focus ~ span,
    & > input:valid ~ label {
        width: 100%;
    }
`;

export const profileInput = css`
    font-size: 15px;
    color: #222222;
    width: 300px;
    border: none;
    border-bottom: solid #aaaaaa 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    background: none;
    z-index: 5;
    &::placeholder {
        color: #aaaaaa;
    }
    &:focus {
        outline: none;
    }
`;

export const saveButton = css`
    position: absolute;
    right: 30px;
    bottom: 15px;
    height: 30px;
    font-size: 18px;
    font-weight: 500;
    background-color: white;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eee;
    }
`;
