import './Flag.css'
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import Anima from '../../assets/images/Spinner-1s-200px.svg';

export const Flag = () => {

   const { name } = useParams();

   const navigat = useNavigate()

   let [data, setFlag] = useState([]);

   useEffect(() => {
		fetch(`https://restcountries.com/v2/name/` + name)
         .then(res => res.json())
         .then(data => setFlag(data));
	}, [name]);

   return(
      <div className="container">
         <button onClick={() => navigat(-1)} className='back'>Back</button>
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
                       <h2 className="flag__title">{el.name}</h2>
                       <div className='flag-box'>
                       <div>
                        <p className="flag__text"><strong className="flag__str">Native Name : </strong>{el.nativeName}</p>
                        <p className="flag__text"><strong className="flag__str">Population : </strong>{el.population}</p>
                        <p className="flag__text"><strong className="flag__str">Region : </strong>{el.region}</p>
                        <p className="flag__text"><strong className="flag__str">Sub Region : </strong>{el.subregion}</p>
                        <p className="flag__text"><strong className="flag__str">Capital : </strong>{el.capital}</p>
                       </div>
                       <div className='fox-box'>
                         <p className="flag__text"><strong className="flag__str">Top Level Domain : </strong>{el.alpha2Code}</p>
                         <p className="flag__text"><strong className="flag__str">Currencies : </strong>{`${el.currencies.map(itm => (itm.symbol))} - ${el.currencies.map(itm => (itm.name))}`}</p>
                         <p className="flag__text"><strong className="flag__str">Languages : </strong>{`${el.languages.map(item => (item.name))} , ${el.languages.map(item => (item.nativeName))}`}</p>
                       </div>
                       </div>

                       <div className='flagbtn-box'>
                        <h3 className='flagbtn-title'>Border Countries: </h3>
                        {
                           el.borders.map(item => (
                              <button className='flag-btn' type='button'>{item}</button>
                           ))
                        }
                       </div>
                           </div>
                         </li>
                       ))
                    }
                  </ul>
               ) : (<img className='no-img' src={Anima} alt='delete.img' width={250} height={100}/>)
            }
         
      </div>
   )
}