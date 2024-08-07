fetch('(https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=16.41&lon=-98.51&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric&mode=xml)')
	.then(response => response.text())
	.then(data => {
		const parser = new DOMParser();
		const xml = parser.parseFromString(data, 'application/xml');
		const pronostico = xml.querySelector('forecast');
		const html = `
			<h2>Pronóstico del Tiempo</h2>
			<ul>
				${pronostico.querySelectorAll('time').map(time => `
					<li>
						${time.querySelector('from').textContent} - ${time.querySelector('to').textContent}
						<ul>
							<li>Temperatura: ${time.querySelector('temperature').getAttribute('value')}°C</li>
							<li>Humedad: ${time.querySelector('humidity').getAttribute('value')}%</li>
							<li>Viento: ${time.querySelector('wind').getAttribute('speed')} m/s</li>
						</ul>
					</li>
				`).join('')}
			</ul>
		`;
		document.getElementById('pronostico').innerHTML = html;
	})
	.catch(error => console.error('Error:', error));