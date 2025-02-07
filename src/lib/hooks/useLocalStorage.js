function useLocalStorage() {

    const getLocalStorage = (key) => {
        try {
            return JSON.parse(localStorage.getItem(key) || "{}");
        } catch (err) {
            return localStorage.getItem(key);
        }
    };

    const setLocalStorage = (key, value) => {
        return localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    };

    const removeLocalStorage = (key) => {
        return localStorage.removeItem(key);
    };


    return {
        getLocalStorage, setLocalStorage, removeLocalStorage
    }
}

export default useLocalStorage;