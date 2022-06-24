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
        res.render('./users/login');
    },
    profile: (req, res) => {
        res.render('./users/profile')
    }
    
};

module.exports = controller;