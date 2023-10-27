import { useEffect, useState } from 'react';
import DecathlonApi from '../../DecathlonApi';

import './ListProducts.css';


export default function ListProducts({urlFetch}){

  const [isLoading, setIsLoading] = useState(true);
  const [dataPosts, setDataPosts] = useState(null);
  const [error, setError] = useState(null);
  const decaApi = new DecathlonApi();
 
  useEffect( () => {


    decaApi.fetchData(urlFetch)
      .then(data => {
        
        let popularItems = data.sort(
          (i1, i2) => (i1.rate < i2.rate) ? 1 : (i1.rate > i2.rate) ? -1 : 0
        );

        setDataPosts(popularItems.slice(0, 4));
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