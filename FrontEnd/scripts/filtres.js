export function genererFiltres() {

	const filterContainer = document.querySelector('.filtres');
	const galleryItems = document.querySelectorAll('.gallery__item');

	filterContainer.addEventListener('click', (event) => {
		if (event.target.classList.contains('filtres__button')) {

			const filterValue = event.target.getAttribute('data-filter');

			event.target.classList.add('active');

			filterContainer.querySelector('.active').classList.remove('active');
			galleryItems.forEach((item) => {
				if (item.classList.contains(filterValue) || filterValue === 'all') {
					item.classList.remove('hide');
					item.classList.add('show');
				}
				else {
					item.classList.remove('show');
					item.classList.add('hide');
				}
			});

		}

	})

}