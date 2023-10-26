import './FooterAskAnything.css';

function FooterAskAnything({title, content, id}){

  return <div className="footer-list">
    <h4 className="footer-list-h">{title}</h4>
    <div id={id}>
      <i className={content.icon}></i>
      <div>
        <p>{content.p}</p>
        <a href={content.a.link}>{content.a.text}</a>
      </div>
    </div>
  </div>

}

export default FooterAskAnything;