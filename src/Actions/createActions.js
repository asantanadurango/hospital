// para pacientes
export const PARA_ESPERA = "PARA_ESPERA";
export const PARA_ATENDIDOS = "PARA_ATENDIDOS";
export const PARA_INTERNADOS = "PARA_INTERNADOS";

export const actEspera = (payload) => {
	return {
		type: PARA_ESPERA,
		payload: payload,
	};
};

export const actAtendidos = (payload) => {
	return {
		type: PARA_ATENDIDOS,
		payload: payload,
	};
};

export const actInternos = (payload) => {
	return {
		type: PARA_INTERNADOS,
		payload: payload,
	};
};
