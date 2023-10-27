import { Link } from 'react-router-dom';

import logo from './../../assets/img/decathlon-logo.svg';
import './Header.css';

import NavHeader from './NavHeader';

export default function Header(){

  const navItems = [
    {text: "Home", link: "/"},
    {text: "Deportes", link: "/sport"},
    {text: "Mujer", link: "#"},
    {text: "Hombre", link: "#"},
    {text: "Equipamiento", link: "#"},
    {text: "Infantil", link: "#"},
    {text: "Nutrición y Salud", link: "#"},
    {text: "Descuentos", link: "#"},
  ]

  return (

  <header id="mainHeader">
    <Link to="/"><img src={logo} /></Link>
    <NavHeader items={navItems}/>
  </header>

  );
}