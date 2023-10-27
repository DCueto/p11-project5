
import './Home.css';
import banner from './../assets/img/banner.jpeg';

import ListProducts from './../components/products/ListProducts';


function Home() {

  return (
    <>
      <main id="main-container">
        <section className="banner-container">
          <img className="banner" src={banner} />
        </section>
        <ListProducts urlFetch="http://localhost:3002/articles" />
      </main>
    </>
  )
}

export default Home;