function recordameMiddleware(req, res, next){
  next();

  if (req.cookies.recordame != undefined && req.session.nombre == undefined) {
    const usersJSON = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    let users;
    if (usersJSON == "") {
      users = [];
    } else {
      users = JSON.parse(usersJSON);
    }
    let userExist;
    for (let i = 0; i < users.lenght; i++) {
      if (users[i].email == req.cookies.recordame) userExist = users[i];
      break;
    }
  }
  req.session.nombre = userExist.fullname;
};

module.exports = recordameMiddleware;
