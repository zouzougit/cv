var boutonEmail = document.getElementById('boutonEmail'),
    iconeMenu = document.getElementById('iconeMenu'),
    contentMenu = document.getElementById('contentMenu'),
    iconeClose = document.getElementById('iconeClose');

/*fonction ouverture menu*/
iconeMenu.addEventListener("click", function menu() {
    contentMenu.style.display = "block";
    iconeMenu.style.display = "none";
});

iconeClose.addEventListener("click", function menu() {
    contentMenu.style.display = "none";
    iconeMenu.style.display = "block";
});
/*fonction mail*/
boutonEmail.addEventListener("click", function mail() {
    boutonEmail.innerHTML =
        '<i class="fa fa-envelope" aria-hidden="true"></i>' + ' rezzouk.zoulikha@gmail.com';
});