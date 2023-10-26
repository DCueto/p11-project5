
import './SpanList.css';

function SpanList({list}){

  return (
    <div className="span-links">
      {
        list.map((item, i, array) =>(
          i == array.length-1
            ? (<p key={i}><span className="span-item"><a href="#">{item.text}</a></span></p>)
            : (<p key={i}><span className="span-item"><a href="#">{item.text}</a></span><span className="span-divisor">-</span>
          </p>)
        ))
      }
    </div>
  )
}

export default SpanList;