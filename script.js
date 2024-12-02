const image = document.getElementById('nezukoChanAOKAOK');

image.addEventListener('mouseenter', function() {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

image.addEventListener('mouseleave', function() {
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});
