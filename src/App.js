import { Provider } from "react-redux";
import store from "./Reducers/index";
import React from "react";
import Lista from "./components/Lista";

function App() {
	return (
		<Provider store={store}>
			<Lista />
		</Provider>
	);
}

export default App;
