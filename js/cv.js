var lienProfil = document.getElementById('lien-profil'),
    lienResume = document.getElementById('lien_resume'),
    lienPortfolio = document.getElementById('lien_portfolio'),
    lienContact = document.getElementById('lien_contact'),
    lienTelechargerCv = document.getElementById('lien_telecharger_cv'),
    divProfil = document.getElementById('profil'),
    divResume = document.getElementById('resume'),
    divPortfolio = document.getElementById('portfolio'),
    divContact = document.getElementById('contact'),
    divTelechargerCv = document.getElementById('telecharger_cv');

/****** profil******/
lienProfil.addEventListener("click", function () {
    divProfil.style.display = "block";
    divResume.style.display = "none";
    divPortfolio.style.display = "none";
    divContact.style.display = "none";
});
/****** résumé ******/
lienResume.addEventListener("click", function () {
    divResume.style.display = "block";
    divProfil.style.display = "none";
    divPortfolio.style.display = "none";
    divContact.style.display = "none";
    divTelechargerCv.style.display = "none";
});
/****** portfolio ******/
lienPortfolio.addEventListener("click", function () {
    divPortfolio.style.display = "block";
    divProfil.style.display = "none";
    divResume.style.display = "none";
    divContact.style.display = "none";

});
/****** contact ******/
lienContact.addEventListener("click", function () {
    divContact.style.display = "block";
    divProfil.style.display = "none";
    divResume.style.display = "none";
    divPortfolio.style.display = "none";
});