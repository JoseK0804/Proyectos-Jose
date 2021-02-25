import React from 'react'
import "../bootstrap/css/bootstrap.css";
import "../bootstrap/css/bootstrap.min.css";
import "./carrito.css";

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    // Se agrega en una variable las variables, para ser usadas mas adelante y mas facil
    const { name, precio, id, img} = producto;
    
    // Es una funcion que recorre los productos y devuelve uyn arreglo con el producto seleccionado
    //Agregar productos al carrito
    const seleccionarProducto = id => {
        console.log("Comprado..." + id);
        const producto = productos.filter(producto => producto.id == id)[0];
        console.log(producto);
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    // Eliminar un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        //Colocar los productos en el state
        agregarProducto(productos);
    }


    // Se muestra cada variable del objeto
    // Se crea un evento clcik dentro de un boton 
    return ( 
        <div class="Contenedor">
            <div class="card">
            <img class="card-img-top card_img" src={img} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text precio">$ {precio}</p>
                {productos 
                    ?
                    (
                        <button 
                            type="button"
                            class="btn btn-dark"
                            onClick={ ()=> seleccionarProducto(id)}>Comprar
                        </button>
                    )
                    :
                    (
                        <button 
                            type="button"
                            onClick={ ()=> eliminarProducto(id)}>Eliminar
                            </button>
                            
                    )
                }
            </div>
        </div>
        </div>
        
    );

}
export default Producto;