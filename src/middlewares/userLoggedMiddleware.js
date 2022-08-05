const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  if (req.cookies != undefined && req.cookies.userEmail != undefined){
    let emailCookie = req.cookies.userEmail;
    let userFromCookie = db.Users.findOne({ where: { email: emailCookie } });
    if(userFromCookie != undefined){
      req.session.usuario =userFromCookie; 
    }
  }


  if (req.session.usuario) {
    res.locals.isLogged = true;
    res.locals.usuario = req.session.usuario
  }

  next();
}

module.exports = userLoggedMiddleware;
