import  React from "react";
import img1 from './img/john.jpg'
import img2 from './img/deny.jpg'
import img3 from './img/tyrion.jpg'


function Card(){
    return(
    <div className="bg-dark" >
        
        <h1 className="text-center text-white font-monospace">Best fictional characters of GOT</h1>
        <div className="container">
  <div className="row">
    <div className="col">
    <div className="card card text-white bg-secondary  my-3" style={{width: "18rem"}}>
  <img src={img1} className="card-img-top" alt="john" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Jon snow</h5>
    <p className="card-text">Jon Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington..</p>
    <a href="https://en.m.wikipedia.org/wiki/Jon_Snow_(character)" target="_blank" className="btn btn-warning">know more</a>
    
  </div>
</div>
    </div>
    <div className="col">
    <div className="card card text-white bg-secondary  my-3" style={{width: "18rem"}}>
  <img src={img2} className="card-img-top" alt="deny" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Danerious</h5>
    <p className="card-text">Danerious is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which she is portrayed by English actoress Emilia Clarke..</p>
    <a href="https://en.m.wikipedia.org/wiki/Daenerys_Targaryen" target="_blank" className="btn btn-warning">know more</a>
  </div>
</div>
      
    </div>
    <div className="col">
    <div className="card card text-white bg-secondary  my-3" style={{width: "18rem"}}>
  <img src={img3} className="card-img-top" alt="tyrion" height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Peter Dinklage</h5>
    <p className="card-text">Tyrion is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Peter Dinklage..</p>
    <a href="https://en.m.wikipedia.org/wiki/Tyrion_Lannister" target="_blank" className="btn btn-warning">know more</a>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
    )

}

export default Card;