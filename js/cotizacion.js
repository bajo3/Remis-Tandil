
    let distanciaInput = document.querySelector("#distancia");
		let cotizarButton = document.querySelector("#cotizar");
		let resultado = document.querySelector("#resultado");

		cotizarButton.addEventListener("click", function() {
			let distancia = Number(distanciaInput.value);
      let bandera = 180
      let sumaTotal = distancia * 200 + bandera
			resultado.textContent = "El costo del viaje es $" + sumaTotal;
		});