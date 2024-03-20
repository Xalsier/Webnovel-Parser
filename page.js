const pageData = [
    'Cover Art',  // Placeholder for the cover art image
    '1 page',
    '2 page',
    '3 page',
    '4 page',
    '5 page',
    '6 page',
    '7 page',
    '8 page',
    '9 page',
    '10 page'
];

console.log('Total pages:', pageData.length);

let currentPage = 0;
const lastPage = pageData.length - 1;

function generatePages() {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = '';

    pageData.forEach((content, index) => {
        const pageElement = document.createElement('div');
        pageElement.id = index.toString();
        pageElement.className = 'page' + (index !== 0 ? ' inactive' : '');

        if (index === 0) {
            pageElement.style.backgroundImage = "url('../new/Illustration.png')";  // Replace with actual path to the cover image
            pageElement.style.backgroundSize = 'cover';  // Ensure the image covers the whole page
            pageElement.style.backgroundPosition = 'center';  // Center the background image
        } else {
            pageElement.innerHTML = `<p>${content}</p>`;
        }

        mainElement.appendChild(pageElement);
    });
}

function updatePage(newPage) {
    document.getElementById(currentPage.toString()).classList.add('inactive');
    currentPage = newPage;
    document.getElementById(currentPage.toString()).classList.remove('inactive');
    document.getElementById('zero').innerHTML = currentPage;
    console.log('Page', currentPage);
}

function pageTurnNext() {
    if (currentPage < lastPage) {
        updatePage(currentPage + 1);
    }
}

function pageTurnBack() {
    if (currentPage > 0) {
        updatePage(currentPage - 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generatePages();
    document.getElementById('zero').innerHTML = currentPage;
});
