import './FooterSocialNetworks.css';

function FooterSocialNetworks({title, content}){

  return <div className="footer-list">
    <h4 className="footer-list-h">{title}</h4>
    <div className="social-items">
      {
        content.map((item, i)=>
          <a key={i} href={item.link}><i className={item.icon}></i></a>
        )
      }
    </div>
  </div>

}

export default FooterSocialNetworks;