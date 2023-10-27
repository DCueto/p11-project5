import { useEffect, useState } from "react";

import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
import PathNav from './../components/PathNav';
import ViewProducts from "../components/products/ViewProducts";


function Sport(){

  const pathItems = [
    {text: "HOME", a: "/"},
    {text: "DEPORTES", a: "/sport"},
    {text: "CICLISMO", a: "#"},
    {text: "BICICLETAS DE NIÑOS E INFANTILES", a: "/sport"}
  ]

  return (
    <>
      <PathNav ruta={pathItems} />
      <ViewProducts fetchUrl='http://localhost:3002/articles' title="Bicicletas de niños e infantiles" />
    </>
  );
}

export default Sport;