import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export function useLoadList(loadBoardList, boardId) {
    const [findBoard, setFindBoard] = useState([]);
    useEffect(() => {
        setFindBoard(
            loadBoardList.filter(
                (board) => board.boardId === parseInt(boardId)
            )[0]
        );
    }, [loadBoardList, boardId]);

    return { loadBoardList, findBoard };
}

export function useLoadListByPageNumber(page) {
    const [loadBoardList, setLoadBoardList] = useState([]);
    const pageNumber = parseInt(page);
    const [pageNumberData, setPageNumberData] = useState({});

    const getBoardListAll = async () => {
        try {
            const response = await axios.get("http://localhost:8080/board");
            setLoadBoardList(response.data);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    useEffect(() => {
        getBoardListAll();
    }, []);

    const boardList = loadBoardList.filter(
        (board, index) =>
            index > pageNumber * 12 - 13 && index < pageNumber * 12
    );

    useEffect(() => {
        const size = loadBoardList.length;

        const totalPageCount = Math.floor(
            size % 12 === 0 ? size / 12 : size / 12 + 1
        );
        const startPageNumber =
            pageNumber % 5 === 0
                ? pageNumber - 4
                : pageNumber - (pageNumber % 5) + 1;
        const endPageNumber =
            startPageNumber + 4 <= totalPageCount
                ? startPageNumber + 4
                : totalPageCount;

        setPageNumberData(() => {
            return {
                size,
                totalPageCount,
                startPageNumber,
                endPageNumber,
            };
        });
    }, [loadBoardList]);

    let pageNumbers = useMemo(() => {
        let newPageNumbers = [];
        for (
            let i = pageNumberData.startPageNumber;
            i <= pageNumberData.endPageNumber;
            i++
        ) {
            newPageNumbers = [...newPageNumbers, i];
        }
        return newPageNumbers;
    }, [pageNumberData]);

    return {
        boardList,
        loadBoardList,
        pageNumbers,
        pageNumberData,
    };
}
