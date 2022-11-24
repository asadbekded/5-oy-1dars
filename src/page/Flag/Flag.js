import './Flag.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import Anima from '../../assets/images/Spinner-1s-200px.svg';

export const Flag = () => {

   const { name } = useParams();

   let [data, setFlag] = useState([]);

   useEffect(() => {
		fetch(`https://restcountries.com/v3.1/name/` + name)
         .then(res => res.json())
         .then(data => setFlag(data));
	}, [name]);

   return(
      <div className="container">

            {
               data.length ? (
                  <ul className="flag-list">
                    {
                       data.map(el => (
                  <li className="flag-item">
                     <div className='hard-box'>
                       <img className='flag-img' src={el.flags.svg} alt="Germany-flag" width={450} height={300}/>
                     </div>
                     <div className='flag-content'>
                       <h2 className="flag__title">{el.name.common}</h2>
                       <div className='flag-box'>
                       <div>
                        {/* <p className="card__text"><strong className="card__str">Native Name : </strong>{el.name.nativeName.nld.common}</p> */}
                        <p className="flag__text"><strong className="flag__str">Population : </strong>{el.population}</p>
                        <p className="flag__text"><strong className="flag__str">Region : </strong>{el.region}</p>
                        <p className="flag__text"><strong className="flag__str">Sub Region : </strong>{el.subregion}</p>
                        <p className="flag__text"><strong className="flag__str">Capital : </strong>{el?.capital?.[0]}</p>
                       </div>
                       <div className='fox-box'>
                         <p className="flag__text"><strong className="flag__str">Top Level Domain : </strong>{el.tld}</p>
                         {/* <p className="card__text"><strong className="card__str">Currencies : </strong>{el.currencies.EUR.name}</p> */}
                         <p className="flag__text"><strong className="flag__str">Languages : </strong>{`${el.languages.nld} , ${el.languages.fra} ,${el.languages.deu}`}</p>
                       </div>
                       </div>

                       <div className='flagbtn-box'>
                        <h3 className='flagbtn-title'>Border Countries: </h3>
                        <button className='flag-btn' type='button'>{el.borders[0]}</button>
                        <button className='flag-btn' type='button'>{el.borders[1]}</button>
                        <button className='flag-btn' type='button'>{el.borders[3]}</button>
                       </div>
                     </div>
                  </li>
                       ))
                    }
                  </ul>
               ) : (<img className='no-img' src={Anima} alt='delete.img' width={250} height={100}/>)
            };
         
      </div>
   )
}