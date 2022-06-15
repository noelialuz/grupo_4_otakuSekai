const controller = {
    login: (req, res) => {
        res.render('./users/login');
    },
    register: (req, res) => {
        res.render('./users/register',
        {title: "Register"});
    }
};

module.exports = controller;