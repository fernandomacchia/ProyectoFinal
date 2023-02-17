var btnExperience = document.getElementById("btn-experience");
var experienceList = document.getElementById("experience-list");
var btnEducation = document.getElementById("btn-education");
var educationList = document.getElementById("education-list");

experienceList.style.display = "none"; // Oculta la lista de experiencia por defecto
educationList.style.display = "none"; // Oculta la lista de educación por defecto

btnExperience.addEventListener("click", function() {
if (experienceList.style.display === "none") {
experienceList.style.display = "block";
btnExperience.textContent = "Ocultar Experiencia Laboral";
} else {
experienceList.style.display = "none";
btnExperience.textContent = "Mostrar Experiencia Laboral";
}
});

btnEducation.addEventListener("click", function() {
if (educationList.style.display === "none") {
educationList.style.display = "block";
btnEducation.textContent = "Ocultar Educación";
} else {
educationList.style.display = "none";
btnEducation.textContent = "Mostrar Educación";
}
});

// Agrega un listener al botón que despliega todo
document.getElementById("btn-show-all").addEventListener("click", function() {
// Muestra ambas listas
experienceList.style.display = "block";
educationList.style.display = "block";

// Cambia los textos de los botones
btnExperience.textContent = "Ocultar experiencia";
btnEducation.textContent = "Ocultar educación";

// Oculta el botón que despliega todo
this.style.display = "none";
});