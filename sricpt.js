// Smooth animation for section scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple hover animation for profile photo
const profilePhoto = document.querySelector('.profile-photo');
profilePhoto.addEventListener('mouseover', () => {
    profilePhoto.style.transform = 'scale(1.1)';
    profilePhoto.style.transition = 'transform 0.3s ease';
});

profilePhoto.addEventListener('mouseout', () => {
    profilePhoto.style.transform = 'scale(1)';
});
