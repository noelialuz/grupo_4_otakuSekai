const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const bcrypt = require("bcryptjs");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const { validationResult } = require("express-validator");
const { count, Console } = require("console");

const userController = {
  register: (req, res) => {
    db.Countries.findAll().then(function (countries) {
      res.render("./users/register", {
        paises: countries,
      });
    });
  },
  processRegister: (req, res) => {
    console.log(req.body);
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return db.Countries.findAll().then(function (countries) {
        res.render("./users/register", {
          paises: countries,
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      });
    } else {
      db.Users.create({
        first_name: req.body.nombre,
        last_name: req.body.apellido,
        dni: req.body.DNI,
        email: req.body.Email,
        address: req.body.Direction,
        country_id: req.body.Country,
        phone: req.body.Phone,
        birthday: req.body.Birthdate,
        password: bcrypt.hashSync(req.body.Password, 10),
        avatar: "../img/avatars/" + req.file.filename,
        profile_id: 1,
      })
        .then(() => {
          return res.redirect("/");
        })
        .catch((error) => res.send(error));
    }
  },
  login: (req, res) => {
    res.render("./users/login", {
      msg: "",
    });
  },
  logueado: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./users/login", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      db.Users.findAll().then(function (users) {
        let userExist = users.find((user) => user.email == req.body.Email);
        if (userExist) {
          let password = bcrypt.compareSync(
            req.body.Password,
            userExist.password
          );
              if (password) {
                delete userExist.password;
                req.session.nombre = userExist.first_name;
                req.session.usuario = userExist;
                req.session.usuario.email = userExist.email;
                if (req.body.recordame != undefined) {
                  res.cookie("userEmail", req.body.Email, {
                    MaxAge:2592000,
                  });
                }
                db.Countries.findAll().then(function (countries) {
                  res.redirect("/");
                });
              } else {
                res.render("./users/login", {
                  msg: "El usuario o contraseña no son válidos",
                });
              }
        }else {res.render("./users/login", {
          msg: "El usuario no existe. Si no tenes usuario crealo con el botón de abajo",
        });
      }
      });
    }
  },
  profile: (req, res) => {
    usuarioLogueado = req.session.usuario.email;
    if (usuarioLogueado) {
      db.Users.findAll().then(function (users) {
        let userExist = users.find((user) => user.email == usuarioLogueado);
        if (userExist) {
          return db.Countries.findAll().then(function (countries) {
            let selected_country = countries.find(element => element.id = userExist.country_id);
            userExist.country_id = selected_country.description;
            country_list = countries.splice(selected_country.id, 1);
            console.log(country_list);
            res.render("./users/profile", {
              paises: countries,
              usuario: userExist
            });
          });
        } else {
          res.render("./users/register");
        }
      });
    } else {
      res.render("./users/login");
    }
  },
  profile_id: (req, res) => {
    db.Users.update(
      {
        first_name: req.body.nombre,
        last_name: req.body.apellido,
        dni: req.body.DNI,
        email: req.body.Email,
        address: req.body.Direction,
        country_id: req.body.Country,
        phone: req.body.Phone,
        birthday: req.body.Birthdate,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(() => {
        return res.redirect("/");
      })
      .catch((error) => res.send(error));
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
  profileEdit: (req, res) => {
    usuarioLogueado = req.session.usuario.email;
    if (usuarioLogueado) {
      db.Users.findAll().then(function (users) {
        let userExist = users.find((user) => user.email == usuarioLogueado);
        if (userExist) {
          return db.Countries.findAll().then(function (countries) {
            let selected_country = countries.find(element => element.id = userExist.country_id);
            userExist.country_id = selected_country.description;
            country_list = countries.splice(selected_country.id, 1);
            userExist.avatar = "../" + userExist.avatar
            res.render("./users/profileEdit", {
              paises: countries,
              usuario: userExist
            });
          });
        } else {
          res.render("./users/register");
        }
      });
    } else {
      res.render("./users/login");
    }
  },
};

module.exports = userController;
