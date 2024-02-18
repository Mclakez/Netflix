var accordions = document.querySelectorAll('.accordion-header');

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        var activeAccordion = document.querySelector('.accordion-header.active');
        var activeIcon = document.querySelector('.accordion-header.active .icon');

        if (activeAccordion && activeAccordion !== this) {
            activeAccordion.classList.remove('active');
            activeAccordion.nextElementSibling.style.display = 'none';
            activeIcon.style.transform = 'rotate(0deg)';
        }

        this.classList.toggle('active');
        var content = this.nextElementSibling;
        var icon = this.querySelector('.icon');
        
        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.style.display = 'block';
            icon.style.transform = 'rotate(45deg)';
        }
    });
}