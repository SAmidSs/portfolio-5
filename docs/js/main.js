$(function () {
    $(".star").rateYo({
        rating: 5,
        starWidth: "24px",
        spacing: "8px",
        readOnly: true,
        ratedFill: '#FFC107',
        starSvg: '<svg width="20px" height="19px"viewBox="0 0 20 19"><path d="M9.25866 0.927052C9.55801 0.00574112 10.8614 0.00573993 11.1608 0.927051L12.6794 5.60081C12.8132 6.01284 13.1972 6.2918 13.6304 6.2918H18.5447C19.5134 6.2918 19.9162 7.53141 19.1325 8.10081L15.1568 10.9894C14.8063 11.244 14.6596 11.6954 14.7935 12.1074L16.3121 16.7812C16.6114 17.7025 15.557 18.4686 14.7732 17.8992L10.7975 15.0106C10.447 14.756 9.97242 14.756 9.62193 15.0106L5.64619 17.8992C4.86248 18.4686 3.808 17.7025 4.10735 16.7812L5.62595 12.1074C5.75982 11.6954 5.61316 11.244 5.26268 10.9894L1.28694 8.10081C0.503224 7.53141 0.905999 6.2918 1.87472 6.2918H6.78901C7.22223 6.2918 7.60619 6.01284 7.74006 5.60081L9.25866 0.927052Z" /></svg>'
    });

    // $('.down-menu__list').on('click', function(){
    //     $('.submenu').addClass('submenu--active');
    // });
    // $('.submenu--active').on('click', function(){
    //     $(on).removeClass('submenu--active');
    // });
    $(".dropdown__btn").click(function () {
        $(this).siblings(".dropdown__content").slideToggle(350);
    });

})


// function myFunction() {
//     document.getElementById("dropdown__items").classList.toggle("show");
// }


// window.onclick = function (event) {
//     if (!event.target.matches('.dropdown__btn')) {

//         var dropdowns = document.getElementsByClassName("dropdown__content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }





