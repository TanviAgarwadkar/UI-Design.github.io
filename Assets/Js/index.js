function show() {
    var p = document.getElementById('show');
    if (p.style.display === 'none') {
        p.style.display = 'block';
    }
    $(function () {
        setTimeout(function () { $("#show").fadeOut(1500); }, 1000)
    })
}