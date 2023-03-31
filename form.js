// script.js
document
	.getElementById('signup-form')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		const username = document.getElementById('signup-username').value;
		const email = document.getElementById('signup-email').value;
		const password = document.getElementById('signup-password').value;

		// Ici, vous pouvez ajouter le code pour envoyer les données d'inscription à votre serveur.
		console.log('Inscription :', username, email, password);
	});

document
	.getElementById('login-form')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		const username = document.getElementById('login-username').value;
		const password = document.getElementById('login-password').value;

		// Ici, vous pouvez ajouter le code pour envoyer les données de connexion à votre serveur.
		console.log('Connexion :', username, password);
	});
