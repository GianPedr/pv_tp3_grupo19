export const eliminarProductoMasBarato = (productos) => {
  if (productos.length === 0) return productos;
  const minPrecio = Math.min(...productos.map((p) => p.precio));
  return productos.filter((p) => p.precio !== minPrecio);
};