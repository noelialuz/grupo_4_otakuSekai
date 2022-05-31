/* Tener en cuenta: precioActual= precioAnterior*(100-descuento)/100 */

let productos = [
    {
        name: "Taza Mágica Goku",
        categoria: "Tazas, llaveros, pins, aros",
        descuento: "20",
        precioAnterior: "1500",
        descripcion: "¿Cómo funciona la taza mágica? Es sensible al calor. Cuando la taza está fría se ve negra, al introducir líquido caliente en ella, va desapareciendo la capa negra gradualmente y aparece el diseño. Una vez que el líquido se enfría, la taza vuelve al color negro original.",
        id: 1,
        imagen1: "/img/tazas,llaveros,pins,aros/1/taza1.png",
        imagen2: "/img/tazas,llaveros,pins,aros/1/taza1a.png",
        imagen3: "/img/tazas,llaveros,pins,aros/1/taza1b.png",
        imagen4: "/img/tazas,llaveros,pins,aros/1/taza1c.png"  
    },
    {
        name: "Taza Mágica Dragon Ball Z",
        categoria: "Tazas, llaveros, pins, aros",
        descuento: "20",
        precioAnterior: "1500",
        descripcion: "¿Cómo funciona la taza mágica? Es sensible al calor. Cuando la taza está fría se ve negra, al introducir líquido caliente en ella, va desapareciendo la capa negra gradualmente y aparece el diseño. Una vez que el líquido se enfría, la taza vuelve al color negro original.",
        id: 2,
        imagen1: "/img/tazas,llaveros,pins,aros/1/taza2.png",
        imagen2: "/img/tazas,llaveros,pins,aros/1/taza2a.png",
        imagen3: "/img/tazas,llaveros,pins,aros/1/taza2b.png",
        imagen4: "/img/tazas,llaveros,pins,aros/1/taza2c.png"  
    },

]

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