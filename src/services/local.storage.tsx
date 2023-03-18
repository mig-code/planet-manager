export const getDataLocalStorage = <T,>(storeName: string): Array<T> | null => {
    const result = localStorage.getItem(storeName);
    if (!result) return null;
    return JSON.parse(result);
};

export const persistDataLocalStorage = <T,>(
    storeName: string,
    data: Array<T>
): void => {
    localStorage.setItem(storeName, JSON.stringify(data));
};
