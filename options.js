function toggleOptions() {
    const navButtons = document.getElementById('nav-buttons');
    const navOptions = document.getElementById('nav-options');

    if (navOptions.style.display === 'none') {
        navOptions.style.display = 'block';
        navButtons.style.display = 'none';
    } else {
        navOptions.style.display = 'none';
        navButtons.style.display = 'flex';
    }
}