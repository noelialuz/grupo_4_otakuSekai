const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");


const usersController = {
    list: (req, res) =>{
        let users = [];
        db.Users.findAll().then(function (users) {
            users.forEach(userIteration => {
             let user ={
                    id: userIteration.id,
                    name: userIteration.first_name + " " + userIteration.last_name,
                    email: userIteration.email,
                    detail: "api/users/" + userIteration.id,
                }
                users.push(user);
            });
            res.status(200).json({
                meta: {
                  status: 200,
                  url: "api/Users",
                },
                count: users.length,
                users: users
              });
        });
    },
    user: (req, res) =>{
        db.Users.findByPk(req.params.id).then(function (user) {
            db.Countries.findByPk(user.country_id).then(function (countryData) {

            return res.status(200).json({
                meta: {
                  status: 200,
                  url: "api/products/:id",
                },
                data: {
                    id: user.id,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    dni: user.dni,
                    email: user.email,
                    address: user.address,
                    country: countryData.descrption,
                    phone: user.phone,
                    birthday: user.birthday,
                    Avatar: user.avatar,
                },
              });
            });
        });
    }
    

}

module.exports = usersController;