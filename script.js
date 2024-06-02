window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar1');
    if (window.scrollY > 0) { // Change 50 to the scroll position you want
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});