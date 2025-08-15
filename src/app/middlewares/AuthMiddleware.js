module.exports = function AuthMiddleware(req, res, next) {
    res.locals.isAuthenticated = req.session.isAuthenticated;
    res.locals.user = req.session.user;
    next();
}