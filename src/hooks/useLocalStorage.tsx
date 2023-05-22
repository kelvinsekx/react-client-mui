import { useEffect, useState } from "react";

type LocalStorageReturnType = [string | null, (value: string | null) => void];

const useLocalStorage = (
    key: string,
    firstValue: string | null = null,
): LocalStorageReturnType => {
    const initialValue = localStorage.getItem(key) || firstValue;

    const [item, setItem] = useState<string | null>(initialValue);

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
