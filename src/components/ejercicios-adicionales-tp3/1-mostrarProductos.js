export const mostrarProductos = (productos) => {
  productos.forEach((p) =>
    console.log(`Producto: ${p.descripcion} - Precio: $${p.precio.toFixed(2)}`)
  );
};