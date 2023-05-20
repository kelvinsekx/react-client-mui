import { useEffect, useState } from "react";

const useLocalStorage = (key: string, firstValue: string | null = null) => {
    const initialValue = localStorage.getItem(key) || firstValue;

    const [item, setItem] = useState(initialValue);

    useEffect(
        function setKeyInLocalStorage() {
            if (item === null) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, item);
            }
        },
        [key, item],
    );

    return [item, setItem];
};

export default useLocalStorage;
