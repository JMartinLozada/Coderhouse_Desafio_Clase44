let modulo = require('../contenedor/dao/contenedorDao');
const {options_mdb} = require('../options/mariaDB.js');
const {options} = require('../options/SQLite3.js');
let contenedor_prod = new modulo.Contenedor('productos', options_mdb);
let contenedor_mnsjs = new modulo.Contenedor('mensajes', options);

const obtenerProductos = () => {
    return contenedor_prod.getAll();;
}

const obtenerProductoPorId = (args) => {
  const { id } = args; 
  return contenedor_prod.getById(id);
}

const borrarProductoPorId = (args) => {
  const { id } = args; 
  return contenedor_prod.deleteById(id);
}

const agregarProducto = (args) => {
  const { title, price, thumbnail } = args;
  const producto = {title, price, thumbnail };
  contenedor_prod.save(producto);
  return producto;
} 

module.exports = {
  borrarProductoPorId,
  agregarProducto,
  obtenerProductoPorId,
  obtenerProductos
}