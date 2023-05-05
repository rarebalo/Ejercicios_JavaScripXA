/*3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}

Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}

3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un 
mensaje si el item ya existe “ya existe xxx con yyy unidades”*/

class Producto {
    Nombre;
    Precio;
    Unidades;
    constructor(nombre, precio, unidades = 1){
        this.Nombre=nombre;
        this.Precio=precio;
        this.Unidades=unidades;
    }
}

class Carrito {
    MontoTotal = 0;
    Productos = [];
    agregarProducto(nombre = nombre.Nombre, precio = nombre.Precio, unidades = nombre.Unidades){
        let repetido = false;

        for (let i = 0; i < this.Productos.length; i++) {
            if(this.Productos[i].Nombre==nombre){
                this.Productos[i].Unidades += unidades;
                repetido = true;
                break;
            }                     
        }
        if (!repetido) {
            this.Productos.push(nombre);
        }        
        this.MontoTotal+=(precio*unidades);
    }

}

let queso = new Producto("Parmesano", 500);
let gaseosa = new Producto("CocaCola", 300);
let pan = new Producto("PanLactal", 150);
let hamburguesa = new Producto("Paty", 400);
let miCarrito = new Carrito();

miCarrito.agregarProducto(queso);
miCarrito.agregarProducto(queso,300,2);
miCarrito.agregarProducto(gaseosa);
miCarrito.agregarProducto(pan);
miCarrito.agregarProducto(hamburguesa);
miCarrito.agregarProducto(pan);

console.log(miCarrito);