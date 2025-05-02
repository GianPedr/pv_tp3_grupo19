export const filtrarProductosPorPrecio = (productos, precioMinimo = 20) => {
  return productos.filter((p) => p.precio > precioMinimo);
};