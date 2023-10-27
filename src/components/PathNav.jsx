import './PathNav.css';

function PathNav({ruta}){

  return (
    <nav className="pathNav">
      <ul>
        {
        ruta.map((item, i) =>(
          i == ruta.length -1
          ? <li key={i}><a href={item.a}>{item.text}</a></li>
          : <li key={i}><a href={item.a}>{item.text}</a><span>{">"}</span></li>
        )
        )
        }
      </ul>
    </nav>
  )
}

export default PathNav;