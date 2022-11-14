import "./Card.css"


const Card = ({img, name, population, region, capital}) => {
   return(
      <li className="card__item">
         <img src={img} alt="Germany-flag" width={264} height={160}/>
         <div className="card__box">
            <h3 className="card__title">{name}</h3>
            <p className="card__text"><strong className="card__str">Population : </strong>{population}</p>
            <p className="card__text"><strong className="card__str">Region : </strong>{region}</p>
            <p className="card__text"><strong className="card__str">Capital : </strong>{capital}</p>
         </div>
      </li>
   );
};

export default Card