import { useState, useEffect } from 'react';
import Anima from '../../assets/images/Spinner-1s-200px.svg';
import Card from '../../components/Card/Card';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

export const Home = ({ btnTheme }) => {

   let [data, setData] = useState([]);
   let [selvalue, opValue] = useState('')
	let [value, setValue] = useState('');

	const getValue = (evt) => {
		setValue(evt.target.value)
	}

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

   const searchVariant = {
      hidden: {
         width: '100%',
         maxWidth: '50px',
         overflow: 'hidden',
      },
      visible: {
         width: '100%',
         maxWidth: '480px',
         overflow: 'hidden',
         transition: {
            type: 'tween',
            duration: 1,
            delay: 0.5
         }
      }
   }

   const cardContainer = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 1.5,
          delayChildren: 1.8,
          staggerChildren: 0.2
        }
      }
    }
      
    const cardVariant = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    }


    const sectionVariant = {
      hidden: {
         x: '-100vw',
      },
      visible: {
         x: 0,
         transition: {
            duration: 0.5,
            delay: 0.5
         }
      }
   }


   const [t] = useTranslation()

   return(
      <>
        <motion.main variants={sectionVariant} initial='hidden' animate='visible' >
			   <section className = {btnTheme ? 'dark' : ''}>
               <div className="container">
                  <div className="search__form">
                     <motion.input variants={searchVariant} onChange={getValue} className = "search__inp" type="serch" placeholder={t('serch.inp')} />
                     <select onChange={getOpvalue} className="search__sel">
                       <option value="" disabled selected>{t('serch.sel')}</option>
                       <option value="Oceania">Oceania</option>
                       <option value="Asia">Asia</option>
                       <option value="Americas">Americas</option>
                       <option value="Europe">Europe</option>
                       <option value="Africa">Africa</option>
                       <option value="Antarctic">Antarctic</option>							  
                     </select>
                  </div>
               </div>
            </section>
				<section className = {btnTheme ? 'dark' : ''}>
					<div className='container'>
                  {
                     data.length ? (
                        <motion.ul variants={cardContainer} initial='hidden' animate='visible' className='card__list'>
							      {data.map((item) => (
                            <motion.li variants={cardVariant} key={item.name.common} >
                              <Card btnTheme={btnTheme}   obj={item}/>
                            </motion.li>
							      ))}
						      </motion.ul>
                     ) : (<img className='no-img' src={Anima} alt='delete.img' width={250} height={100}/>)
                  }
					</div>
				</section>
			</motion.main>
      </>
   )
}