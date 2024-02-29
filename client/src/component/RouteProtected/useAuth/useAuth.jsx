export const useAuth = () => {
    //getting token from local storage
    const user = localStorage.getItem('IsLog')
    if (user) {
        console.log("TRUE");
        return true;
    } else {
        console.log("FALSE");
        return false
    }
};