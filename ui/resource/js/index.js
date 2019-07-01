function GetSize() {
    var width = $("body").outerWidth();
    //width > 640 ? width = 640 : null;
    //width < 320 ? width = 320 : null;
    $('html').css({ 'font-size': (width * (62.5 / 320)) + '%' });
}
