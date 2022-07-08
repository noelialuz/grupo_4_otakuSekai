const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersDatabase.json');

function recordameMiddleware(req, res, next){
  
 console.log(req.cookies.recordame);
  if (req.cookies.recordame != undefined && req.session.usuario.Email == undefined) {
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
    req.session.usuario.Email = userExist.fullname;
  }
  
  next();
};

module.exports = recordameMiddleware;
