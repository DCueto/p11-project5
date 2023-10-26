import { useEffect, useState } from 'react';

import './ListProducts.css';


export default function ListProducts({urlFetch}){

  const [isLoading, setIsLoading] = useState(true);
  const [dataPosts, setDataPosts] = useState(null);
 
  useEffect( () => {
    async function fetchData(URL){
      try{
        const request = await fetch(URL);
        const response = await request.json();

        // SORT ARRAY BY RATE VALUE
        let sortedArray = response.sort(
          (i1, i2) => (i1.rate < i2.rate) ? 1 : (i1.rate > i2.rate) ? -1 : 0
        );
        
        // Set 5th first items of sortedArray as data to use
        setDataPosts(sortedArray.slice(0, 4));
        setIsLoading(false);
      } catch(error) {
        console.log(error);
      }
    }

    fetchData(urlFetch);
  }, []);


  
  if(isLoading){
    return (
      <div className="loading">
        <h1>LOADING...</h1>
      </div>
    )
  }

  return (
    <section className="list-products top-products">
      <h2>Productos destacados</h2>
      <div className="list-products-content">
      {
        dataPosts.map( item =>
          <article className="list-products-item" key={item.id}>
            <figure className='list-products-item-img'>
              <img src={item.poster_img} />
              <span className='price-tag'>{item.price}€</span>
            </figure>
            <div className="list-products-item-info">
              <p className='list-products-item-info-brand'>{item.brand}</p>
              <p className='list-products-item-info-model'>{item.name}</p>
            </div>
          </article>

        )
      }
      </div>
    </section>
  );

}