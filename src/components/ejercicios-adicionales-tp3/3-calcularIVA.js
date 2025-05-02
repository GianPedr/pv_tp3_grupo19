export const calcularIVA = (productos, tasaIVA = 0.21) => {
  return productos.map((p) => ({
    ...p,
    precio: (p.precio * (1 + tasaIVA)).toFixed(2),
  }));
};