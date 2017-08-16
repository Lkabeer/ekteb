$('#ektebLogoX').addClass('animated tada');

$('#footerX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('#mhLogoX').addClass('animated tada');
    $('#copyRightX').addClass('animated flash');
    $('.socialMediaX').addClass('animated flash');
});

