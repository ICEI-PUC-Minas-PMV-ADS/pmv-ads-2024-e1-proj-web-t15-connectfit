document.addEventListener('DOMContentLoaded', function(e) {

    /*================= ICONE DO MENU =================*/
    document.querySelector('.divmenu').addEventListener('click', function() {
        document.querySelector('.menu-aside').classList.add('active');
        document.documentElement.classList.add('disabled');
    });

    document.querySelectorAll('.menu-icon-close, .menu-aside-layer, .menu-item').forEach(function(element) {
        element.addEventListener('click', function() {
            document.querySelector('.menu-aside').classList.remove('active');
            document.documentElement.classList.remove('disabled');
        });
    });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
})
// TENTATIVA DE UTILIZAR JQUERY AINDA VOU AJUSTAR DIREITINHO JS PURO LOGO ACIMA
// (function($) {
// 	$(document).ready(function(e) {
//         /*================= ICONE DO MENU =================*/
// 		$('.menu-icon').click(function () {
// 			$('.menu-aside').addClass('active');
// 			$('html').addClass('disabled');
// 		});
// 		$('.menu-icon-close, .menu-aside-layer').click(function () {
// 			$('.menu-aside').removeClass('active');
// 			$('html').removeClass('disabled');
// 		});
//     });
// })(jQuery);