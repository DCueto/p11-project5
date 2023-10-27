import { useState, useEffect } from 'react';
import DecathlonApi from '../../DecathlonApi';

import './ViewProducts.css';

function ViewProducts({fetchUrl, title}){

  const [isLoading, setIsLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState(null);
  const [error, setError] = useState(null);
  const decaApi = new DecathlonApi();


  useEffect(()=>{

    decaApi.fetchData(fetchUrl)
      .then(data => {

        let filteredProducts = data.filter(product => {
          return product.category == "Bicicletas de niños e infantiles";
        });

        setDataProducts(filteredProducts);
      })
      .catch(error => setError(error))
      .finally(()=> setIsLoading(false));

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