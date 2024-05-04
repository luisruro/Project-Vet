// Import our custom CSS
import '../scss/custom.scss'
import '../css/style.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const petsSection = document.querySelector('.pets');

petsSection.classList.add('row', 'gap-2', 'justify-content-center', 'align-items-center');

pets.forEach(function(mascota) {
    petsSection.innerHTML += `
<div class="card pt-2 col-sm-12 col-md-4 col-lg-6 col-xl-6" style="width:18rem";>
    <img src="${mascota.image}"class="card-img-top img-thumbnail object-fit-fill size" ; alt="imagen de la mascota">
    <div class="card-body">
        <h5 class="card-title">Nombre: ${mascota.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Especie:  ${mascota.type}</li>
        <li class="list-group-item">Raza:  ${mascota.breed}</li>
        <li class="list-group-item">Edad:  ${mascota.age}</li>
        <li class="list-group-item">Peso:  ${mascota.weight}</li>
        <li class="list-group-item">Estado:  ${mascota.condition}</li>
        <li class="list-group-item">Dueño:  ${mascota.owner.name}</li>
    </ul>
</div>
`;
});
