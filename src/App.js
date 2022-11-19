import Header from './components/Header/Header';
import Card from './components/Card/Card';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
	let [data, setData] = useState([]);

	let [value, setValue] = useState('');
	const getValue = (evt) => {
		setValue(evt.target.value)
	}
	
	let [selvalue, opValue] = useState('')

	const getOpvalue= (evt) => {
		opValue(evt.target.value)
	}
	console.log(selvalue);

	
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

	
	return (
		<div className='App'>
			<Header />
			<main>
			   <section>
               <div className="container">
                  <form method="post" className="search__form">
                     <input onChange={getValue} className = "search__inp" type="serch" placeholder="Search for a country…" />
                     <select onClick={getOpvalue} className="search__sel">
                       <option value="" disabled selected>Filter by Region</option>
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
                  </form>
               </div>
            </section>
				<section>
					<div className='container'>
						<ul className='card__list'>
							{data.map((item) => (
                        <Card obj={item}/>
							))}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};
export default App;