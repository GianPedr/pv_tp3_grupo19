export const ordenarProductos = (productos) => {
  return [...productos].sort((a, b) => a.precio - b.precio);
};
export const agregarParlanteBluetooth = (productos) => {
  const nuevoProducto = {
    descripcion: "Parlante Bluetooth",
    precio: 59000.9,
  };
  return [...productos, nuevoProducto];
};