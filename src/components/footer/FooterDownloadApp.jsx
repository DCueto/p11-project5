import './FooterDownloadApp.css';

function FooterDownloadApp({title, content}){

  return <div className="footer-list">
    <h4 className="footer-list-h">{title}</h4>
    <div className="social-items">
        {
          content.map((item, i) =>
            <div key={i} className="social-item">
              <a href={item.link}><i className={item.icon}></i><span>{item.text}</span></a>
            </div>
          )
        }
      </div>
  </div>

}

export default FooterDownloadApp;