
export const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({message : 'logout'});
        localStorage.clear();
    } catch (error) {
        console.log(error);
    }
};