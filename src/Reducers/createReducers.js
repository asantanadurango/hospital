import { PARA_ESPERA, PARA_ATENDIDOS, PARA_INTERNADOS } from "../Actions/createActions";

const initialState = {
	EnListaDeEspera: ["Juan", "Carlos", "Monica", "Yuri"],
	atendidos: ["Lucia", "Mario"],
	internados: ["Viviana"],
};

export const pacientesReducers = (state = initialState, action) => {
	switch (action.type) {
		case PARA_ESPERA:
			return {
				...state,
				EnListaDeEspera: state.EnListaDeEspera.concat([action.payload]),
				atendidos: state.atendidos.filter((p) => action.payload !== p),
				internados: state.internados.filter((p) => action.payload !== p),
			};

		case PARA_ATENDIDOS:
			return {
				...state,
				EnListaDeEspera: state.EnListaDeEspera.filter((p) => action.payload !== p),
				atendidos: state.atendidos.concat([action.payload]),
				internados: state.internados.filter((p) => action.payload !== p),
			};

		case PARA_INTERNADOS:
			return {
				...state,
				EnListaDeEspera: state.EnListaDeEspera.filter((p) => action.payload !== p),
				atendidos: state.atendidos.filter((p) => action.payload !== p),
				internados: state.internados.concat(action.payload),
			};

		default:
			return state;
	}
};
