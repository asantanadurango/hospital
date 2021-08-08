import React from 'react';
import { connect } from 'react-redux';
import { actEspera, actAtendidos, actInternos } from '../Actions/createActions';
import './styles.css';

function Lista({ valuesList, listar, atender, internar, enEsperaLength, atendidosLength, internadosLength }) {
	return (
		<div className='container'>
			<h2 className='w-100'>Hospital La Cura</h2>
			<div className='divider-bar' />
			<ul className='w-100'>
				<h2 className='sub-title w-100'>Pacientes en lista de espera ({enEsperaLength}) : </h2>
				{valuesList[0].map((value) => (
					<li key={Math.random()}>
						<h3>{value}</h3>
						<button
							onClick={() => {
								atender(value);
							}}>
							atender
						</button>
						<button
							onClick={() => {
								internar(value);
							}}>
							internar
						</button>
						<div className='divider-bar' />
					</li>
				))}
				{valuesList[0].length === 0 && (
					<li>
						<h3>No hay pacientes en lista de espera</h3>
					</li>
				)}
			</ul>

			<ul>
				<h2 className='sub-title'>Pacientes atendidos ({atendidosLength}) : </h2>
				{valuesList[1].map((value) => (
					<li key={Math.random()}>
						<h3>{value}</h3>
						<button
							onClick={() => {
								listar(value);
							}}>
							listar
						</button>
						<button
							onClick={() => {
								internar(value);
							}}>
							internar
						</button>
						<div className='divider-bar' />
					</li>
				))}
				{valuesList[1].length === 0 && (
					<li>
						<h3>No hay pacientes atendidos</h3>
					</li>
				)}
			</ul>

			<ul>
				<h2 className='sub-title'>Pacientes internados ({internadosLength}): </h2>
				{valuesList[2].map((value) => (
					<li key={Math.random()}>
						<h3>{value}</h3>
						<button
							onClick={() => {
								listar(value);
							}}>
							listar
						</button>
						<button
							onClick={() => {
								atender(value);
							}}>
							atender
						</button>
						<div className='divider-bar' />
					</li>
				))}
				{valuesList[2].length === 0 && (
					<li>
						<h3>No hay pacientes internados</h3>
					</li>
				)}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		enEsperaLength: state.pacientesReducers.EnListaDeEspera.length,
		atendidosLength: state.pacientesReducers.atendidos.length,
		internadosLength: state.pacientesReducers.internados.length,
		valuesList: Object.values(state.pacientesReducers),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		listar: (payload) => {
			dispatch(actEspera(payload));
		},
		atender: (payload) => {
			dispatch(actAtendidos(payload));
		},
		internar: (payload) => {
			dispatch(actInternos(payload));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Lista);
