import { Routes, Route } from "react-router-dom";
import "./styles/index.scss"
import { AppRouter } from "components/AppRouter";
import { Provider } from "react-redux";
import { store } from 'redux/store';

const App = () => {

	return (
		<div className='app'>
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</div>
	);
};

export default App;