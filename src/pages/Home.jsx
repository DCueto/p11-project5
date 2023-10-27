
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
        <ListProducts urlFetch="articles" />
      </main>
    </>
  )
}

export default Home;