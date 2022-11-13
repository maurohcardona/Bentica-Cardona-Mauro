import {useState} from "react";
import '../Estilos/Contador.css'

function Contador ({ stock, onAdd, initial = 1}) {
    
    const [cantidad, setcantidad] = useState (initial);

    const agregar = () => {
        if (cantidad < stock ) {
            setcantidad(cantidad + 1)
        }
    };

    const sacar = () => {
        if (cantidad > 1) {
            setcantidad(cantidad - 1)
        }
    }
    
    const agregarAlCarrito = () => {
        onAdd(cantidad);
    };
    
    return (
        <div className="contenedor-contador">
            <div className="contenedor-botones">
                <button onClick={sacar} disabled={cantidad === 1}>-</button>
                <span>{cantidad}</span>
                <button onClick={agregar} disabled={cantidad === stock}>+</button>
            </div>
            <div>
                <button className="add" onClick={agregarAlCarrito}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Contador