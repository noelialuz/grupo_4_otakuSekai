function guestMiddleware(req, res, next) {
    if (req.session.usuario) {
        return res.redirect("/profile");
    }
    next();
}

module.exports = guestMiddleware;