(function () {
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementsByClassName('sidebar-overlay')[0];
    var container = document.getElementsByClassName('container')[0];
    var sidebarBtnClose = document.getElementById('sidebarBtnClose');
    var sidebarBtnOpen = $('.sidebar-btn-open');

    var openSidebar = function () {
        sidebarOverlay.style.left = '0';
        sidebar.style.left = '0';
    }

    var closeSidebar = function (e) {
        e.cancelBubble = true;
        sidebarOverlay.style.left = '-130%';
        sidebar.style.left = '-450px';
    }

    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarBtnClose.addEventListener('click', closeSidebar);
    sidebarBtnOpen.click(openSidebar);



     owl_actualizacion = $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });


   

    $('.sublist>span').click(function () {
        $('.sublist>ul, .sublist>span').removeClass('active');
        $(this).parent().find('ul, span').addClass('active');
    });
})()