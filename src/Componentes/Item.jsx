import React from "react";
import '../Estilos/Cards.css'

function Item ({ producto }) {
    return (
        <div className="item">
            <img src={producto.imagen} width="200px" alt={producto.nombre} />
            <p className="item-p">{producto.nombre}</p>
            <p className="item-p"><b>${producto.precio}</b></p>
            <p className="item-p c">{producto.categoria}</p>
       </div>
    )
}

export default Item;