document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Page is fully loaded');
});
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Page is fully loaded');
    // Example of adding interactivity
    const contactLink = document.querySelector('nav ul li a[href="#contact"]');
    contactLink.addEventListener('click', () => {
        alert('You can contact me at lucastbos@icloud.com!');
    });
});
