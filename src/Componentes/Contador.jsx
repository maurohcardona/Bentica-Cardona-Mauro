import {useState} from "react";
import '../Estilos/Contador.css'

function Contador ({stock}) {
    const [cantidad, setcantidad] = useState (0);

    const agregar = () => {
        if (cantidad < stock) {
            setcantidad(cantidad + 1)
        }
    };

    const sacar = () => {
        if (cantidad > 0) {
            setcantidad(cantidad - 1)
        }
    }
    
    
    return (
        <div className="contenedor-contador">
            <div className="contenedor-botones">
                <button onClick={sacar} disabled={cantidad === 0}>-</button>
                <span>{cantidad}</span>
                <button onClick={agregar} disabled={cantidad === stock}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Contador