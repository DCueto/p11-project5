import logo from './../../assets/img/decathlon-logo.svg';
import './Header.css';

import NavHeader from './NavHeader';

export default function Header(){

  const navItems = [
    {text: "Deportes", link: "#"},
    {text: "Mujer", link: "#"},
    {text: "Hombre", link: "#"},
    {text: "Equipamiento", link: "#"},
    {text: "Infantil", link: "#"},
    {text: "Nutrición y Salud", link: "#"},
    {text: "Descuentos", link: "#"},
  ]

  return (

  <header id="mainHeader">
    <img src={logo} />
    <NavHeader items={navItems}/>
  </header>

  );
}