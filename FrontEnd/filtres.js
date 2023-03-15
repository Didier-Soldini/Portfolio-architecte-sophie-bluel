export function genererFiltres() {
const filterContainer = document.querySelector('.filtres'),
 galleryItems = document.querySelectorAll('.gallery__item');

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains('filtres__button')){
   	 // desactive classe active en cour 'filtres__button'
   	 filterContainer.querySelector('.active').classList.remove('active');
   	 // deplace class active sur 'filtres__button' actif
   	 event.target.classList.add('active');
   	 const filterValue = event.target.getAttribute('data-filter');
	 // filtre la galerie par les id'
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove('hide');
       	 item.classList.add('show');
       }
       else{
       	item.classList.remove('show');
       	item.classList.add('hide');
       }
   	 });
   }
 })
}