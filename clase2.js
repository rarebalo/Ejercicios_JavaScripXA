class Carrito {

    MontoTotal = 0;
    //Articulos = 0;
    Productos = [];


    agregarProducto(nuevoProducto, unidad = 1) {

        let repetidos = false;

        for (let i = 0; i < this.Productos.length; i++) {
            if (this.Productos[i].Nombre === nuevoProducto.Nombre) {
                this.Productos[i].Unidad += unidad;
                repetidos = true;
                break;
            }
        }

        if (!repetidos) {
            nuevoProducto.Unidad = unidad;
            this.Productos.push(nuevoProducto);
        }


        this.MontoTotal += (nuevoProducto.Precio * unidad);
        this.Articulos += unidad;
    }
}

class Producto {

    Nombre;
    Precio;
    Unidad;

    constructor(nombre, precio, unidad) {
        this.Nombre = nombre;
        this.Precio = precio;
        this.Unidad = unidad;
    }
}


let salamin = new Producto("salamin", 889.5);
let alfajor = new Producto("alfajor", 200);
let fosforos = new Producto("fosforos", 101.4);

let miCarrito = new Carrito();

miCarrito.agregarProducto(salamin, 3);
miCarrito.agregarProducto(alfajor);
miCarrito.agregarProducto(fosforos, 5);
miCarrito.agregarProducto(salamin);
miCarrito.agregarProducto(alfajor, 3);
miCarrito.agregarProducto(fosforos);

console.log("Importe total: $" + miCarrito.MontoTotal);
console.log("Cantidad de articulos: " + miCarrito.Articulos);
console.log(miCarrito.Productos[0]);


