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
    constructor(nombre, precio, unidades = 1) {
        this.Nombre = nombre;
        this.Precio = precio;
        this.Unidades = unidades;
    }
}

class Carrito {
    MontoTotal = 0;
    Productos = [];
    ProductosAgrupados = [];
    ProductosRepetidos = [];


    agregarProducto(nombre = nombre.Nombre, precio = nombre.Precio, unidades = nombre.Unidades) {

        if (typeof nombre !== "object") {
            let nuevoProducto = new Producto(nombre, precio, 1);
            for (let i = 0; i < unidades; i++) {
                this.Productos.push(nuevoProducto);
            }

        } else {
            this.Productos.push(nombre);
        }
        this.MontoTotal += (Number(precio) * Number(unidades));  
    }

    filtrarRepetidos() {
        if(this.MontoTotal === 0){
            return console.log("Tu carro esta triste :( por que aun no tiene nada que mostrar. ");
        }else{
        let memoria = [];
        let copiaProductos = this.Productos;

        for (let i = 0; i < copiaProductos.length; i++) {
            for (let j = 0; j < copiaProductos.length; j++) {
              
                if (i!==j &&copiaProductos[i] === copiaProductos[j]) {
                    memoria.push(copiaProductos[i]);
                    memoria[memoria.length-1].Precio +=copiaProductos[j].Precio;
                    memoria[memoria.length-1].Unidades += 1;
                    copiaProductos.splice(j,1);
                    j-1;
                }
                
            }        
            
        }
        for (let i = 0; i < copiaProductos.length; i++) {
            if(copiaProductos[i].Unidades>1){
                this.ProductosRepetidos.push(copiaProductos[i]);
                console.log("ya existe "+ copiaProductos[i].Nombre+ " con " + copiaProductos[i].Unidades + " unidades");
            }
            
        }

        return this.ProductosAgrupados = copiaProductos;
    }
    }
 
}

let miCarrito = new Carrito();
let queso = new Producto("Parmesano", 500);
let gaseosa = new Producto("CocaCola", 300);
let pan = new Producto("PanLactal", 150);
let hamburguesa = new Producto("Paty", 400);





miCarrito.agregarProducto("tortillas", 120, 1);
miCarrito.agregarProducto(queso);
miCarrito.agregarProducto(queso, 350, 2);
miCarrito.agregarProducto(gaseosa);
miCarrito.agregarProducto("cinta", 50, 2);
miCarrito.agregarProducto(pan);
miCarrito.agregarProducto(hamburguesa);
miCarrito.agregarProducto(pan);
miCarrito.agregarProducto("galletas", 230, 1);
miCarrito.agregarProducto(queso);

//console.log(miCarrito);
console.log(miCarrito.filtrarRepetidos());
//console.log(miCarrito);
