import { useState, useEffect } from 'react';
import Anima from '../../assets/images/Spinner-1s-200px.svg';
import Card from '../../components/Card/Card';
import { useTranslation } from "react-i18next";

export const Home = ({ btnTheme }) => {

   let [data, setData] = useState([]);

	let [value, setValue] = useState('');
	const getValue = (evt) => {
		setValue(evt.target.value)
	}
	
	let [selvalue, opValue] = useState('')

	const getOpvalue= (evt) => {
		opValue(evt.target.value)
	}
	
	useEffect(() => {
		if(value.length){
			fetch(`https://restcountries.com/v3.1/name/` + value)
         .then(res => res.json())
         .then(data => setData(data));
		}else{
			fetch('https://restcountries.com/v3.1/all')
         .then(response => response.json())
         .then(data => setData(data));
		}
		if(selvalue.length){
			fetch(`https://restcountries.com/v3.1/region/` + selvalue)
         .then(res => res.json())
         .then(data => setData(data));
		}
	}, [value, selvalue]);

   const [t] = useTranslation()

   return(
      <>
        <main>
			   <section className = {btnTheme ? 'dark' : ''}>
               <div className="container">
                  <div  className="search__form">
                     <input onChange={getValue} className = "search__inp" type="serch" placeholder={t('serch.inp')} />
                     <select onChange={getOpvalue} className="search__sel">
                       <option value="" disabled selected>{t('serch.sel')}</option>
                       <option value="Oceania">Oceania</option>
                       <option value="Asia">Asia</option>
                       <option value="Americas">Americas</option>
                       <option value="Europe">Europe</option>
                       <option value="Africa">Africa</option>
                       <option value="Antarctic">Antarctic</option>

                       {/* {
								data.map((el) => (
									<option  value={el.region}>{el.region}</option>
								))
							  }; */}
							  
                     </select>
                  </div>
               </div>
            </section>
				<section className = {btnTheme ? 'dark' : ''}>
					<div className='container'>

                  {
                     data.length ? (
                        <ul className='card__list'>
							      {data.map((item) => (
                            <Card btnTheme={btnTheme} key={item.name.common}  obj={item}/>
							      ))}
						      </ul>
                     ) : (<img className='no-img' src={Anima} alt='delete.img' width={250} height={100}/>)
                  };
					</div>
				</section>
			</main>
      </>
   )
}