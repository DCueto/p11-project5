import { Link } from 'react-router-dom';

import './NavHeader.css';

function NavHeader({items}){

  return (
    <nav className="navHeader">
      <ul>
        {
          items.map( (item, i) => <li key={i}><Link to={item.link}>{item.text}</Link></li> )
        }
      </ul>
    </nav>
  )
}

export default NavHeader;