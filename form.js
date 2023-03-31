// Affichage et fermeture des fenêtres modales
const signupModal = document.getElementById('signup-modal');
const loginModal = document.getElementById('login-modal');
const closeButtons = document.getElementsByClassName('close');

document.getElementById('signup-btn').onclick = function () {
	signupModal.style.display = 'block';
};

document.getElementById('login-btn').onclick = function () {
	loginModal.style.display = 'block';
};

for (let closeButton of closeButtons) {
	closeButton.onclick = function () {
		signupModal.style.display = 'none';
		loginModal.style.display = 'none';
	};
}

window.onclick = function (event) {
	if (event.target == signupModal || event.target == loginModal) {
		signupModal.style.display = 'none';
		loginModal.style.display = 'none';
	}
};

// Gestion des soumissions des formulaires d'inscription et de connexion
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
		const email = document.getElementById('login-email').value;
		const password = document.getElementById('login-password').value;

		// Ici, vous pouvez ajouter le code pour envoyer les données de connexion à votre serveur.
		console.log('Connexion :', email, password);
	});

// Gestion de l'option "Mot de passe oublié"
document
	.getElementById('forgot-password')
	.addEventListener('click', function (event) {
		event.preventDefault();

		// Ici, vous pouvez ajouter le code pour gérer la procédure de récupération du mot de passe.
		alert("Fonctionnalité 'Mot de passe oublié' à implémenter.");
	});
