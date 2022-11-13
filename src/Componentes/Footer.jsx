import React from "react";
import { ImWhatsapp } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import  { BsFacebook } from 'react-icons/bs'
import '../Estilos/footer.css'


function Footer() {
    return (
        <div className="footer-container">
            <div className="texto-footer">
                <h4>BÉNTICA COSMÉTICA</h4>
                <p>~ sentir el cambio ~</p>
                <p>Farmacéuticas especialistas en Química Cosmética</p>
            </div>
            <div className="iconos-footer">
                <a href="https://wa.me/541171350471" target="blank"><ImWhatsapp size={25} /></a>
                <a href="https://www.instagram.com/benticacosmetica/1" target="blank"><BsInstagram size={25} /></a>
                <a href="https://www.facebook.com/BenticaCosmetica" target="blank"><BsFacebook size={25} /></a>
            </div>
        </div>
    )
}


export default Footer;


                    