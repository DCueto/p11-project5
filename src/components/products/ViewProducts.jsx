import { useState, useEffect } from 'react';

import './ViewProducts.css';

function ViewProducts({fetchUrl, title}){

  const [isLoading, setIsLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState(null);

  useEffect(()=>{

    async function fetchData(url){
      try{
        const request = await fetch(url);
        const response = await request.json();

        let filteredProducts = response.filter(product => {
          return product.category == "Bicicletas de niños e infantiles";
        });

        setDataProducts(filteredProducts);
        setIsLoading(false);

        console.log(filteredProducts);

      } catch(error){
        console.log(error);
      }

    }

    fetchData(fetchUrl);

  }, []);


  if(isLoading){
    return (
      <div className="loading">
        <h1>LOADING...</h1>
      </div>
    )
  }

  return (
    <section className='viewProducts'>
      <h1 className='viewProducts-h'>{title}</h1>
      <div className='products-container'>
      {
        dataProducts.map((product, i) =>
          <article data-id={product.id} className='product' key={product.id}>
            <figure className='product-img'>
              <img src={product.poster_img} />
              <span className='price-tag'>{product.price}€</span>
            </figure>
            <div className="product-info">
              <p className='product-info-brand'>{product.brand.toUpperCase()}</p>
              <p className='product-info-model'>{product.name.toUpperCase()}</p>
            </div>
          </article>
        )
      }


      </div>
    </section>
  )
}

export default ViewProducts;