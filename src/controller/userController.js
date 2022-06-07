const controller = {
    login: (req, res) => {
        res.render('./users/login',{
            title: "Login"
        });
    },
    register: (req, res) => {
        res.render('./users/register',
        {title: "Register"});
    }
};

module.exports = controller;