import { useMemo } from "react";

export function useLoadList() {
    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(lsBoardList);
    }, []);

    const lastIndex = boardList.length - 1;
    const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
    const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
    const size = boardList.length;

    return { boardList, size, firstId, lastId };
}

export function useLoadListByPageNumber(page) {
    const pageNumber = parseInt(page);

    const loadBoardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        const loadBoardList = !lsBoardList ? [] : JSON.parse(lsBoardList);
        return loadBoardList;
    }, []);

    // console.log(loadBoardList)

    // let loadBoardList = [];

    // const getBoardListAll = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8080/board");
    //         loadBoardList = response.data;
    //     } catch (error) {
    //         console.log(error);
    //     } finally {

    //     }
    // };

    // getBoardListAll();

    // console.log(loadBoardList)

    const boardList = loadBoardList.filter(
        (board, index) =>
            index > pageNumber * 15 - 16 && index < pageNumber * 15
    );

    const size = loadBoardList.length;

    const totalPageCount = Math.floor(
        size % 15 === 0 ? size / 15 : size / 15 + 1
    );
    const startPageNumber =
        pageNumber % 5 === 0
            ? pageNumber - 4
            : pageNumber - (pageNumber % 5) + 1;
    const endPageNumber =
        startPageNumber + 4 <= totalPageCount
            ? startPageNumber + 4
            : totalPageCount;

    let pageNumbers = useMemo(() => {
        let newPageNumbers = [];
        for (let i = startPageNumber; i <= endPageNumber; i++) {
            newPageNumbers = [...newPageNumbers, i];
        }
        return newPageNumbers;
    }, [startPageNumber]);

    return {
        boardList,
        size,
        pageNumbers,
        totalPageCount,
        startPageNumber,
        endPageNumber,
    };
}
