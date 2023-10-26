import lemonway from './../assets/img/lemonway-logo.svg';

import './Footer.css';

import FooterList from './FooterList';
import SpanList from './SpanList';

export default function Footer(){

  const footerLinks1 = [
    {text: "Quiénes somos", a: "#"},
    {text: "Canal ético", a: "#"},
    {text: "Trabaja con nosotros", a: "#"},
    {text: "Sala de prensa", a: "#"},
    {text: "Decathlon afiliados", a: "#"},
    {text: "Decathlon Marketplace", a: "#"},
    {text: "Vende en Decathlon.es", a: "#"},
    {text: "Sostenibilidad", a: "#"},
    {text: "Innovación", a: "#"},
  ];

  const footerLinks2 = [
    {text: "Método de entrega/Gasto de envío", a: "#"},
    {text: "Métodos de pago", a: "#"},
    {text: "Clasificación de nuestros productos", a: "#"},
    {text: "Preguntas Frecuentes", a: "#"},
    {text: "Servicio de montaje", a: "#"},
    {text: "Envío Canarias/Ceuta/Melilla/Andorra", a: "#"},
    {text: "Tax Free", a: "#"},
  ];

  const footerLinks3 = [
    {text: "Cambios y devoluciones", a: "#"},
    {text: "Factura formato electrónico", a: "#"},
    {text: "Tu opinión cuenta", a: "#"},
    {text: "Comunicados seguridad", a: "#"},
  ];

  const footerLinks4 = [
    {text: "Alquiler", a: "#"},
    {text: "Soporte técnico", a: "#"},
    {text: "Tarjeta regalo", a: "#"},
    {text: "Clubes, colegios y empresas", a: "#"},
    {text: "Personalización", a: "#"},
    {text: "Financiación", a: "#"},
    {text: "Extensión de garantía", a: "#"},
    {text: "Equipaciones clubes", a: "#"},
    {text: "Posventa", a: "#"},
  ];

  const footerLinks5 = [
    {text: "Decathlon Live", a: "#"},
    {text: "Ventajas y servicios", a: "#"},
    {text: "Decathlon segunda vida", a: "#"},
    {text: "Revender mis productos", a: "#"},
  ];

  const ask = {
    icon: "fa-solid fa-message",
    p: "Lunes a sábado, 10:00h-22:00h",
    a: {
      text: "Iniciar chat",
      link: "#"
    }
  };

  const download = [
    {
      icon: "fa-brands fa-apple",
      link: "#",
      text: "Apple Store"
    },
    {
      icon: "fa-brands fa-google-play",
      link: "#",
      text: "Google Play"
    },
  ];

  const socialNetworks = [
    {
      icon: "fa-brands fa-facebook-f",
      link: "#"
    },
    {
      icon: "fa-brands fa-youtube",
      link: "#"
    },
    {
      icon: "fa-brands fa-instagram",
      link: "#"
    },
    {
      icon: "fa-brands fa-x-twitter",
      link: "#"
    },
    {
      icon: "fa-brands fa-pinterest-p",
      link: "#"
    }
  ];

  const spanList = [
    {text: "C.G.V", a: "#"},
    {text: "C.G.U", a: "#"},
    {text: "Menciones legales", a: "#"},
    {text: "Política de privacidad y cookies", a: "#"},
    {text: "FAQ", a: "#"},
    {text: "Ayuda/Contacto", a: "#"},
    {text: "Tiendas Decathlon", a: "#"},

  ]

  return (
    <footer className="main-footer">
      <div className="top-lists">
        <FooterList type="footer-links" title="DECATHLON EMPRESA" content={footerLinks1}></FooterList>
        <FooterList type="footer-links" title="COMPRA" content={footerLinks2}></FooterList>
        <FooterList type="footer-links" title="POST-COMPRA" content={footerLinks3}></FooterList>
        <FooterList type="footer-links" title="SERVICIOS" content={footerLinks4}></FooterList>
        <FooterList type="footer-links" title="VENTAJAS" content={footerLinks5}></FooterList>
      </div>
      <div className="bottom-lists">
        <FooterList type="ask-anything" title="PREGÚNTANOS LO QUE QUIERAS" content={ask} id="ask-anything-footer"></FooterList>
        <FooterList type="download-app" title="APP DECATHLON" content={download} ></FooterList>
        <FooterList type="social-items" title="REDES SOCIALES" content={socialNetworks} ></FooterList>
        <FooterList type="partner" title="PARTNER" content={lemonway}></FooterList>
      </div>
      <SpanList list={spanList}></SpanList>
      <div className="terms">
        <p>*Consulta los métodos, plazos y gastos de envio disponibles en el siguiente enlace.</p>
        <p>**Los precios de venta de los artículos de nuestro catálogo incluyen IVA. Los precios para las entregas con destino a Canarias, Ceuta, Melilla y Andorra incluyen impuestos indirectos. Los precios de venta de los artículos de nuestro catálogo son los recomendados</p>
      </div>
    </footer>
  );
}