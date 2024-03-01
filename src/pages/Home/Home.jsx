/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { FaPencil } from "react-icons/fa6";

import Lottie from "react-lottie";
import animationData from "./Animation - 1709116024695.json";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
        },
    };

    const handleMainButtonClick = () => {
        navigate("/board/write");
    };
    return (
        <div css={S.layout}>
            <Lottie options={defaultOptions} height={500} width={500} />
            <h1 css={S.mainTitle}>" 마음속의 말들을 글로 한번 적어보세요. "</h1>
            <button css={S.mainButton} onClick={handleMainButtonClick}>
                <div>
                    <FaPencil />
                </div>
                시작하기
            </button>
        </div>
    );
}

export default Home;
