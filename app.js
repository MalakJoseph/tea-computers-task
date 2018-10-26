const body = document.querySelector('body'),
			close = document.querySelector('.close'),
			registeration = document.querySelector('.registeration'),
			app = document.querySelector('.app'),
			multipleAuthors = document.querySelectorAll('.multiple-authors');

close.addEventListener('click', () => {
	registeration.style.animation = 'zoomOut 1s';
	setTimeout(() => {
		registeration.style.display = 'none';
		app.style.display = 'flex';
		body.style.height = '100%';
	}, 900);
});

multipleAuthors.forEach(ev => {
	ev.addEventListener('click', () => {
		const popup = document.querySelectorAll('.popup');
		popup.forEach(e => {
			e.style.display = 'block';
		});
	});
});
