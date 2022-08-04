function guestMiddleware(req, res, next) {
  if (req.session.usuario) {
    return res.redirect("/users/profile");
  }
  next();
}

module.exports = guestMiddleware;
