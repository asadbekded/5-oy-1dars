import "./Card.css"
import Germany from "../../assets/images/flag-germany.png"


const Card = () => {
   return(
      <li className="card__item">
         <img src={Germany} alt="Germany-flag" width={264} height={160}/>
         <div className="card__box">
            <h3 className="card__title">Germany</h3>
            <p className="card__text"><strong className="card__str">Population: </strong>81,770,900</p>
            <p className="card__text"><strong className="card__str">Region: </strong>Europe</p>
            <p className="card__text"><strong className="card__str">Capital: </strong>Berlin</p>
         </div>
      </li>
   );
};

export default Card