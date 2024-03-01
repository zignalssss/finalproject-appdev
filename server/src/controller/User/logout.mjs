
export const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.localStorage.clear();
        res.status(200).json({message : 'logout'});   
    } catch (error) {
        console.log(error);
    }
};