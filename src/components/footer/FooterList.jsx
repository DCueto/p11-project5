
import './FooterList.css';

function FooterList({title, content}){


  return (
    <div className="footer-list">
      <h4 className="footer-list-h">{title}</h4>
      {
        <ul>
        {
          content.map((item, i) =>
            <li key={i}><a href={item.a}>{item.text}</a></li>
          )
        }
        </ul>
      }
    </div>
  );
}

export default FooterList;