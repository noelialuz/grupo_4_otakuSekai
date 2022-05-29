const controller = {
    cart: (req, res) => {
        res.render('./products/productCart.ejs');
    },
    cartFull: (req, res) => {
        res.render('./products/productCartFull.ejs');
    },
    detail: (req, res) => {
        res.render('./products/productDetaill.ejs');
    },
    verMas: (req, res) => {
        res.render('./products/productVerMas.ejs');
    },
};

module.exports = controller;