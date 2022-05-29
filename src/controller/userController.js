console.log("estoy en el controller");

const controller = {
    login: (req, res) => {
        res.render('./users/login');
    },
    register: (req, res) => {
        res.render('./users/register');
    }
};

module.exports = controller;