var lienProfil = document.getElementById('lien-profil'),
    lienCompetences = document.getElementById('lien_competences'),
    lienFormations = document.getElementById('lien_formations'),
    lienExperience = document.getElementById('lien_experience'),
    lienContact = document.getElementById('lien_contact'),
    divProfil = document.getElementById('profil'),
    divCompetences = document.getElementById('competences'),
    divFormations = document.getElementById('formations'),
    divExperience = document.getElementById('experience'),
    divContact = document.getElementById('contact');

/****** profil******/
lienProfil.addEventListener("click", function () {
    divProfil.style.display = "block";
    divCompetences.style.display = "none";
    divFormations.style.display = "none";
    divExperience.style.display = "none";
    divContact.style.display = "none";
});
/****** fin profil******/
/****** compétences******/
lienCompetences.addEventListener("click", function () {
    divCompetences.style.display = "block";
    divProfil.style.display = "none";
    divFormations.style.display = "none";
    divExperience.style.display = "none";
    divContact.style.display = "none";
});
/****** fin compétences******/
/****** formations ******/
lienFormations.addEventListener("click", function () {
    divFormations.style.display = "block";
    divProfil.style.display = "none";
    divCompetences.style.display = "none";
    divExperience.style.display = "none";
    divContact.style.display = "none";

});
/****** fin formaions******/
/****** experience ******/
lienExperience.addEventListener("click", function () {
    divExperience.style.display = "block";
    divProfil.style.display = "none";
    divCompetences.style.display = "none";
    divFormations.style.display = "none";
    divContact.style.display = "none";

});
/****** fin experience ******/
/****** contact ******/
lienContact.addEventListener("click", function () {
    divContact.style.display = "block";
    divProfil.style.display = "none";
    divCompetences.style.display = "none";
    divFormations.style.display = "none";
    divExperience.style.display = "none";
});
/****** fin contact ******/