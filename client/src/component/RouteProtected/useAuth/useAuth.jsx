export const useAuth = () => {
    //getting token from local storage
    const user = localStorage.getItem('IsLog')
    if (user) {
        return true;
    } else {
        return false
    }
};