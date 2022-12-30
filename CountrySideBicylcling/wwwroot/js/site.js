// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#d3d3d3';
        navbar.style.height = '50px';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.height = '100px';
    }
});