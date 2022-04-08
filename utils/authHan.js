
const withAuth = (req, res, next) => {
    if(!req.session.isHandyman){
        res.redirect("/");
    }
    else{
        next();
    }
};

module.exports = withAuth;
