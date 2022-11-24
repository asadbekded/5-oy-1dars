import Header from './components/Header/Header';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import { Home } from './page/Home/Home';
import { Flag } from './page/Flag/Flag';
import { Error } from './page/Error/Error';

function App() {	
	return (
		<>
			<Header />
			<Routes>
			   <Route path='/' element={<Home/>} />
				<Route path='/flag/:name' element={<Flag/>} />
				<Route path='*' element={<Error/>} />
			</Routes>
		</>
	);
};
export default App;