import './NavHeader.css';

function NavHeader({items}){

  return (
    <nav className="navHeader">
      <ul>
        {
          items.map( (item, i) => <li key={i}><a href={item.link}>{item.text}</a></li> )
        }
      </ul>
    </nav>
  )
}

export default NavHeader;