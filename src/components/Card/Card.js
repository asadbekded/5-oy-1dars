import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({ obj }) => {
   return(
      <li className="card__item">
         <Link to={`/flag/${obj.name.common}`}>
         <div className="img-box">
           <img src={obj.flags.svg} alt="Germany-flag" width={264} height={160}/>
         </div>
         <div className="card__box">
            <h3 className="card__title">{obj.name.common}</h3>
            <p className="card__text"><strong className="card__str">Population : </strong>{obj.population}</p>
            <p className="card__text"><strong className="card__str">Region : </strong>{obj.region}</p>
            <p className="card__text"><strong className="card__str">Capital : </strong>{obj?.capital?.[0]}</p>
         </div>
         </Link>
      </li>
   );
};

export default Card