console.log('estoy en productcontroller')
const controller = {
    cart: (req, res) => {
        res.render('./products/productCart');
    },
    detail: (req, res) => {
        res.render('./products/productDetail');
    },
    verMas: (req, res) => {
        res.render('./products/productVerMas');
    },
};

module.exports = controller;