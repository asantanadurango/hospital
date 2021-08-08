import { Provider } from 'react-redux';
import store from './Reducers/index';
import React from 'react';
import List from './components/List';

function App() {
	return (
		<Provider store={store}>
			<List />
		</Provider>
	);
}

export default App;
