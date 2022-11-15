

$(document).ready(function() {
    $('#menu-btn').click(function() {
        $(this).toggleClass('fa fa-times');
        $('.mid-menu').toggleClass('nav-toggle');
    });
});
