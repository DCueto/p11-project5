
import './FooterList.css';

function FooterList({type, title, content, id}){


  return (

    <div className="footer-list">
      <h4 className="footer-list-h">{title}</h4>

      {
      type == "footer-links" ? (
        <ul>
        {
          content.map(item =>
            <li><a href={item.a}>{item.text}</a></li>
          )
        }
        </ul>
      ) : type=="ask-anything" ? (
        <div id={id}>
          <i className={content.icon}></i>
          <div>
            <p>{content.p}</p>
            <a href={content.a.link}>{content.a.text}</a>
          </div>
        </div>
      ) : type=="download-app" ? (
        <div className="social-items">
        {
          content.map(item =>
            <div className="social-item">
              <a href={item.link}><i className={item.icon}></i><span>{item.text}</span></a>
            </div>
          )
        }
      </div>
      ) : type=="social-items" ? (
        <div className="social-items">
          {
            content.map(item=>
              <a href={item.link}><i className={item.icon}></i></a>
            )
          }
        </div>
      ) : type=="partner" ? (
        <div className="social-items">
          <img src={content} />
        </div>
      ) : console.log("No type")
      
      }

    </div>

  );
}

export default FooterList;