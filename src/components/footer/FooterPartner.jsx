import './FooterPartner.css';

function FooterPartner({title, content}){

  return <div className="footer-list">
    <h4 className="footer-list-h">{title}</h4>
    <div className="social-items">
      <img src={content} />
    </div>
  </div>

}

export default FooterPartner;