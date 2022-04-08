
const withAuth = (req, res, next) => {
    if(!req.session.customer_id){
        res.redirect("/");
    }
    else{
        next();
    }
};

module.exports = withAuth;
