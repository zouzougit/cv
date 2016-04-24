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
/*scroll back-to-top*/
$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var the_id = $(this).attr("href");
        /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
               et safari (webkit) */
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 'slow');
        return false;
    });
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});