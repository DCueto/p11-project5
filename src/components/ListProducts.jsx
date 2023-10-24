
import './ListProducts.css';

import productImg from "./../assets/img/product.jpeg"




export default function ListProducts(){

  let items = [1, 2, 3, 4];

  let listItems = items.map(item =>
    <article className="list-products-item">
      <figure className='list-products-item-img'>
        <img src={productImg} />
        <span className='price-tag'>1599,99€</span>
      </figure>
      <div className="list-products-item-info">
        <p className='list-products-item-info-brand'>ROCKRIDER</p>
        <p className='list-products-item-info-model'>Bicicleta de montaña 275" aluminio Rockrider ST 100 gris</p>
      </div>
    </article>
  );

  return (
    <section className="list-products top-products">
      <h2>Productos destacados</h2>
      <div className="list-products-content">
        {listItems}
      </div>
    </section>
  );

}