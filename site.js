window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#d3d3d3';
        navbar.style.opacity = '100%';
        navbar.style.height = '50px';
    } else {
        /*navbar.style.backgroundColor = 'transparent';*/
        navbar.style.height = '80px';
        navbar.style.opacity = '90%';
    }
});