import "./Card.css"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Card = ({ obj , btnTheme }) => {
   const [t] = useTranslation()
   return(
      <li className = {btnTheme ? 'dark' : 'card__item'}>
         <Link to={`/flag/${obj.name.common}`}>
         <div className="img-box">
           <img src={obj.flags.svg} alt="Germany-flag" width={264} height={160}/>
         </div>
         <div className="card__box">
            <h3 className="card__title">{obj.name.common}</h3>
            <p className="card__text"><strong className="card__str">{t('card.text1')} : </strong>{obj.population}</p>
            <p className="card__text"><strong className="card__str">{t('card.text2')} : </strong>{obj.region}</p>
            <p className="card__text"><strong className="card__str">{t('card.text3')} : </strong>{obj?.capital?.[0]}</p>
         </div>
         </Link>
      </li>
   );
};

export default Card