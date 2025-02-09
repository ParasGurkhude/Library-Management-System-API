const authorizedRole = (role) => {
    return (req, res, next) =>{
        if(res.user.role !== role){
            return res.status(403).json({message: "Access Deined"})
        }
        next()
    }
}

module.exports = authorizedRole