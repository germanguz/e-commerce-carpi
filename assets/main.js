// *Todo el contenido del array de prod fue pasado a "productos.json" Tener en cta que ahi va sin declarar variables, las keys van entre comillas y al final sin ";" solo el array y sin comentarios
// PRODUCTOS
// const productos = [
//     // Abrigos
//     {
//         id: "abrigo-01",
//         titulo: "Abrigo 01",
//         imagen: "../assets/images/abrigos/01.jpg",
//         categoria: {
//             nombre: "Abrigos",
//             id: "abrigos"
//         },
//         precio: 1000
//     },
//     {
//         id: "abrigo-02",
//         titulo: "Abrigo 02",
//         imagen: "../assets/images/abrigos/02.jpg",
//         categoria: {
//             nombre: "Abrigos",
//             id: "abrigos"
//         },
//         precio: 1000
//     },
//     {
//         id: "abrigo-03",
//         titulo: "Abrigo 03",
//         imagen: "../assets/images/abrigos/03.jpg",
//         categoria: {
//             nombre: "Abrigos",
//             id: "abrigos"
//         },
//         precio: 1000
//     },
//     {
//         id: "abrigo-04",
//         titulo: "Abrigo 04",
//         imagen: "../assets/images/abrigos/04.jpg",
//         categoria: {
//             nombre: "Abrigos",
//             id: "abrigos"
//         },
//         precio: 1000
//     },
//     {
//         id: "abrigo-05",
//         titulo: "Abrigo 05",
//         imagen: "../assets/images/abrigos/05.jpg",
//         categoria: {
//             nombre: "Abrigos",
//             id: "abrigos"
//         },
//         precio: 1000
//     },
//     // Camisetas
//     {
//         id: "camiseta-01",
//         titulo: "Camiseta 01",
//         imagen: "../assets/images/camisetas/01.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     {
//         id: "camiseta-02",
//         titulo: "Camiseta 02",
//         imagen: "../assets/images/camisetas/02.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     {
//         id: "camiseta-03",
//         titulo: "Camiseta 03",
//         imagen: "../assets/images/camisetas/03.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     {
//         id: "camiseta-04",
//         titulo: "Camiseta 04",
//         imagen: "../assets/images/camisetas/04.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     {
//         id: "camiseta-05",
//         titulo: "Camiseta 05",
//         imagen: "../assets/images/camisetas/05.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     {
//         id: "camiseta-06",
//         titulo: "Camiseta 06",
//         imagen: "../assets/images/camisetas/06.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     {
//         id: "camiseta-07",
//         titulo: "Camiseta 07",
//         imagen: "../assets/images/camisetas/07.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     {
//         id: "camiseta-08",
//         titulo: "Camiseta 08",
//         imagen: "../assets/images/camisetas/08.jpg",
//         categoria: {
//             nombre: "Camisetas",
//             id: "camisetas"
//         },
//         precio: 1000
//     },
//     // Pantalones
//     {
//         id: "pantalon-01",
//         titulo: "Pantalón 01",
//         imagen: "../assets/images/pantalones/01.jpg",
//         categoria: {
//             nombre: "Pantalones",
//             id: "pantalones"
//         },
//         precio: 1000
//     },
//     {
//         id: "pantalon-02",
//         titulo: "Pantalón 02",
//         imagen: "../assets/images/pantalones/02.jpg",
//         categoria: {
//             nombre: "Pantalones",
//             id: "pantalones"
//         },
//         precio: 1000
//     },
//     {
//         id: "pantalon-03",
//         titulo: "Pantalón 03",
//         imagen: "../assets/images/pantalones/03.jpg",
//         categoria: {
//             nombre: "Pantalones",
//             id: "pantalones"
//         },
//         precio: 1000
//     },
//     {
//         id: "pantalon-04",
//         titulo: "Pantalón 04",
//         imagen: "../assets/images/pantalones/04.jpg",
//         categoria: {
//             nombre: "Pantalones",
//             id: "pantalones"
//         },
//         precio: 1000
//     },
//     {
//         id: "pantalon-05",
//         titulo: "Pantalón 05",
//         imagen: "../assets/images/pantalones/05.jpg",
//         categoria: {
//             nombre: "Pantalones",
//             id: "pantalones"
//         },
//         precio: 1000
//     }
// ];

let productos = [];

fetch("./assets/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

// Traigo lo que voy a necesitar del html
const contenedorProductos = document.querySelector("#id-contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#id-titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#id-numerito");

// primera fc que se ejecuta para cargar todos los productos
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        // saco el active a los botones, para que luego solo quede en el clickeado
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        // ahora agrego la clase active al que le haga click
        e.currentTarget.classList.add("active");

        // con "e.currentTarget.id" traigo el id del botón desde el html
        if (e.currentTarget.id != "todos") {

            // *opción A para mostrar titulo de categoria(la del video)
            // const tituloPorCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            // tituloPrincipal.innerText = tituloPorCategoria.categoria.nombre;

            const productosFiltradosPorCat = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            // llamo a la fc para cargar productos luego de filtrar
            cargarProductos(productosFiltradosPorCat);

            // *opción B para mostrar titulo de categoria(la mia)
            tituloPrincipal.innerText = productosFiltradosPorCat[0].categoria.nombre;
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
})

// para que botonesAgregar no quede como vacío, porque está definida antes de la fc de cargar productos. Ahora al ejecutarse actualizarBotonesAgregar dentro de cargar productos se actualiza botonesAgregar con el array de productos cargado
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLocalStorage = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLocalStorage) {
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    // uso de libreria toastify
    Toastify({
        text: "producto agregado",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: "0.75rem"
        },
        offset: {
            x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    // busca el objeto a agregar con la coincidencia de id
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        // agrego una propiedad más a los objetos del array al que apliqué find
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}