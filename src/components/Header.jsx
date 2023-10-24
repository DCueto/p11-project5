import logo from './../assets/img/decathlon-logo.svg';
import './Header.css';

export default function Header(){

  return (

  <header id="mainHeader">
    <img src={logo} />

    {/* <div className="icons">
      <i className="fa-solid fa-message"></i>
      <i className="fa-brands fa-apple"></i>
      <i className="fa-brands fa-google-play"></i>
      <i className="fa-brands fa-facebook-f"></i>
      <i className="fa-brands fa-youtube"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-x-twitter"></i>
      <i className="fa-brands fa-pinterest-p"></i>
      <i className="fa-solid fa-lemon"></i>
    </div> */}
  </header>

  );
}