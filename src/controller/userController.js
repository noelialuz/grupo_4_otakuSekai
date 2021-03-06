const fs = require('fs');
const path = require('path')
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/usersDatabase.json')
 
const controller = {
    register: (req, res) => {
        res.render('./users/register');
    },
    processRegister: (req, res) => {
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else{        
            let newUser = {
                id: users[users.length - 1].id + 1,
                fullName: req.body.fullName,
                DNI: req.body.DNI,
                Email: req.body.Email,
                Direccion: req.body.Direction,
                Pais: req.body.Country,
                Telefono: req.body.Phone,
                FNacimiento: req.body.Birthdate,
                Password: bcrypt.hashSync(req.body.Password, 10),
                Avatar: req.file.filename
            }

            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
            res.redirect('/users/login');
        } 
        
    },
    login: (req, res) => {
        res.render('./users/login', {msg:''});
        
    },
    logueado: (req,res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length>0){
            return res.render('./users/login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            }) 
        }else{
            const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            let userEmail = req.body.Email;
            let userExist = users.find(user => user.Email == userEmail);
            if(userExist){
                let password = bcrypt.compareSync(req.body.Password,userExist.Password);
                if(password){
                    req.session.nombre = userExist.fullName;
                    req.session.usuario = userExist;
                    if(req.body.recordame != undefined){
                        res.cookie("recordame",req.session.usuario.Email, {MaxAge:2592000})
                    } 
                    
                    res.render('./users/profile', {nombreUsuario: req.session.nombre, usuario: req.session.usuario});
                }
                else{
                    res.render('./users/login', {msg: "El usuario o contrase??a no son v??lidos"});
                }
            }
            else{
                res.render('./users/login', {msg: "El usuario no existe. Si no tenes usuario crealo con el bot??n de abajo"});
            }
        }
    },
    profile: (req, res) => {
        res.render('./users/profile')
    }
    
};

module.exports = controller;