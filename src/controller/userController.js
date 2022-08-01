const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const sequelize = db.sequelize;
const { Op } = require('sequelize');


const { validationResult } = require('express-validator');

const userController = {
    register: (req, res) => {
        db.Countries.findAll().then(function (countries) {
              res.render('./users/register', {
                paises: countries
              });
          });
    },
    processRegister: (req, res) => {
        console.log(req.body);
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            db.Users
            .create({
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                dni: req.body.DNI,
                email: req.body.Email,
                address: req.body.Direction,
                country_id: req.body.Country,
                phone: req.body.Phone,
                birthday: req.body.Birthdate,
                password: bcrypt.hashSync(req.body.Password, 10),
                avatar: req.file.filename,
                profile_id: profile
            }).then(() => {
                return res.redirect('/users/login');
            })
                .catch((error) => res.send(error));

        }

    },
    login: (req, res) => {
        res.render('./users/login', { msg: '' });
    },
    logueado: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {
            db.Users.findAll().then(function (users) {
                let userExist = users.find(user => user.email == req.body.Email);
                if (userExist) {
                    let password = bcrypt.compareSync(req.body.Password, userExist.password);
                    if (password) {
                        req.session.nombre = userExist.first_name;
                        req.session.usuario = userExist;
                        if (req.body.recordame != undefined) {
                            res.cookie("recordame", req.session.usuario.email, { MaxAge: 2592000 })
                        }
                        db.Countries.findAll().then(function (countries) {
                            console.log(userExist);
                            res.render('./users/profile', { usuario: userExist,
                                paises: countries  });
                        });
                        
                    }
                    else {
                        res.render('./users/login', { msg: "El usuario o contraseña no son válidos" });
                    }
                }
                else {
                    res.render('./users/login', { msg: "El usuario no existe. Si no tenes usuario crealo con el botón de abajo" });
                }
            });
        }
    },
    profile: (req, res) => {
        res.render('./users/profile');
    }

};

module.exports = userController;