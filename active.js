document.addEventListener('DOMContentLoaded', function() {
    var pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            pageLinks.forEach(function(pageLink) {
                pageLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});