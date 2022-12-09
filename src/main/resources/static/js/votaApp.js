var vCandidatos = new Array(4);

vCandidatos[0] = 0;
vCandidatos[1] = 0;
vCandidatos[2] = 0;
vCandidatos[3] = 0;

function votapp(usuario,candidato) {
	candidato--;
	alert("Gracias por su voto");
	vCandidatos[candidato] += 1;
}

function resultados() {
	let total = 0;
	for (i = 0; i < 4; i++) {
		total += vCandidatos[i];
	}

	for (i = 0; i < 4; i++) {
		alert("Candidato "+(i+1)+": "+vCandidatos[i]+" votos - "+((vCandidatos[i]/total)*100)+"%");
	}
	location = "@{/votapp}";
}


/* function votar(candidato) {
   vectorCandidatos[candidato] = vectorCandidatos[candidato] + 1;
	alert("Su voto ha sido registrado exitosamente");
} 

function estadistica() {
	let totalVotos = vectorCandidatos[0] + vectorCandidatos[1] + vectorCandidatos[2] + vectorCandidatos[3] + vectorCandidatos[4] + vectorCandidatos[5];
	let porcenCandi1 = (vectorCandidatos[0] / totalVotos) * 100;
	let porcenCandi2 = (vectorCandidatos[1] / totalVotos) * 100;
	let porcenCandi3 = (vectorCandidatos[2] / totalVotos) * 100;
	let porcenCandi4 = (vectorCandidatos[3] / totalVotos) * 100;
	let porcenCandi5 = (vectorCandidatos[4] / totalVotos) * 100;
	let porcenCandi6 = (vectorCandidatos[5] / totalVotos) * 100;

	let nodoParrafo1 = document.createElement('p');
	let nodoParrafo2 = document.createElement('p');
	let nodoParrafo3 = document.createElement('p');
	let nodoParrafo4 = document.createElement('p');
	let nodoParrafo5 = document.createElement('p');
	let nodoParrafo6 = document.createElement('p');
	let nodoParrafo7 = document.createElement('p');


	let nodoTexto1 = document.createTextNode("TOTAL VOTOS ES:  " + totalVotos);
	let nodoTexto2 = document.createTextNode("TOTAL VOTOS POR EL CANDIDATO 1 :  " + vectorCandidatos[0] + "...." + porcenCandi1 + "%");
	let nodoTexto3 = document.createTextNode("TOTAL VOTOS POR EL CANDIDATO 2 :  " + vectorCandidatos[1] + "...." + porcenCandi2 + "%");
	let nodoTexto4 = document.createTextNode("TOTAL VOTOS POR LA CANDIDAT0 3 :  " + vectorCandidatos[2] + "...." + porcenCandi3 + "%");
	let nodoTexto5 = document.createTextNode("TOTAL VOTOS POR EL CANDIDATO 4 :  " + vectorCandidatos[3] + "...." + porcenCandi4 + "%");
	let nodoTexto6 = document.createTextNode("TOTAL VOTOS POR EL CANDIDATO 5 :  " + vectorCandidatos[4] + "...." + porcenCandi5 + "%");
	let nodoTexto7 = document.createTextNode("TOTAL VOTOS POR EL CANDIDATO 6 :  " + vectorCandidatos[5] + "...." + porcenCandi6 + "%");

	nodoParrafo1.appendChild(nodoTexto1);
	nodoParrafo2.appendChild(nodoTexto2);
	nodoParrafo3.appendChild(nodoTexto3);
	nodoParrafo4.appendChild(nodoTexto4);
	nodoParrafo5.appendChild(nodoTexto5);
	nodoParrafo6.appendChild(nodoTexto6);
	nodoParrafo7.appendChild(nodoTexto7);

	let elementoDiv = document.getElementById('conEst');
	elementoDiv.appendChild(nodoParrafo1);
	elementoDiv.appendChild(nodoParrafo2);
	elementoDiv.appendChild(nodoParrafo3);
	elementoDiv.appendChild(nodoParrafo4);
	elementoDiv.appendChild(nodoParrafo5);
	elementoDiv.appendChild(nodoParrafo6);
	elementoDiv.appendChild(nodoParrafo7);

	const $grafica = document.querySelector("#grafica");

	const etiquetas = ["Federico Gutiérrrez", "Gustavo Petro", "Rodolfo Hernández", "Sergio Fajardo"]

	const datosVotos = {
		label: "RESULTADOS DE LAS VOTACIONES",
		data: [vectorCandidatos[0], vectorCandidatos[1], vectorCandidatos[2], vectorCandidatos[3], vectorCandidatos[4], vectorCandidatos[5]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
		backgroundColor:   ["red", "blue", "green", "orange", "purple", "yellow"],
		borderColor: 'rgba(54, 162, 235, 1)',
		borderWidth: 1,
	};

	new Chart($grafica, {
		type: 'bar',
		data: {
			labels: etiquetas,
			datasets: [
				datosVotos,

			]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}],
			},
		}
	});
    

}...*/

