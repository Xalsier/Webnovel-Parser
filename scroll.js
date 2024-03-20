function pageOrScroll() {
    const checkBox = document.getElementById('web');
    const backBtn = document.getElementById('back');
    const nextBtn = document.getElementById('next');
    const mainElement = document.querySelector('main');
    
    if (checkBox.checked) {
        mainElement.classList.add('scroll-mode');
        document.querySelectorAll('.page').forEach(page => page.style.display = 'flex');
        backBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        mainElement.classList.remove('scroll-mode');
        document.querySelectorAll('.page').forEach(page => page.style.display = '');
        backBtn.disabled = false;
        nextBtn.disabled = false;
        updatePage(currentPage);
    }
}
