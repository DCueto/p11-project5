import { useEffect, useState } from "react";

import './Content.css';
import banner from './../assets/img/banner.jpeg';

import ListProducts from './ListProducts.jsx';

export default function Content(){

  return (

  <main id="main-container">
    <section className="banner-container">
      <img className="banner" src={banner} />
    </section>

    <ListProducts urlFetch="http://localhost:3002/articles" />
  </main>

  );
}