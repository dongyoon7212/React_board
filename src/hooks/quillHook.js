import { useState } from "react";

export function useQuillInput() {
    const [quillInput, setQuillInput] = useState("");

    const onChange = (value) => {
        setQuillInput(() => value);
    };

    return [quillInput, onChange];
}
