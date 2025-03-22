
const library = document.querySelector('.library');
const modalBox = document.querySelector('.modal');

const images = '(?:jpg|jpeg|png|bmp|gif|svg|webp)';
const imagePath = new RegExp(`^(https?:\/\/.*\\.${images}|images\\/.*\\.${images})$`);

// MODAL DIALOG

document.querySelector('#add_button').addEventListener('click', () => {
    modalBox.classList.add('active');
});
document.querySelector('#close_button').addEventListener('click', () => {
    modalBox.classList.remove('active');
});

// CURRENT LIBRARY

const currentLibrary = [
    {
        title: 'The Hobbit',
        date: '1937',
        pages: '310',
        synopsis: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by the English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.',
        image: 'images/hobbit.jpg',
        status: 'read'
    },
    {
        title: 'The Lord of the Rings',
        date: '1954',
        pages: '1077',
        synopsis: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien\'s 1937 children\'s book The Hobbit but eventually developed into a much larger work.',
        image: 'images/lotr.jpg',
        status: 'read'
    },
    {
        title: 'The Silmarillion',
        date: '1977',
        pages: '480',
        synopsis: 'The Silmarillion is a book consisting of a collection of myths and stories in varying styles by the English writer J. R. R. Tolkien. It was edited, partly written, and published posthumously by his son Christopher Tolkien in 1977, assisted by Guy Gavriel Kay.',
        image: 'images/silmarillion.jpg',
        status: 'read'
    },
    {
        title: 'Unfinished Tales',
        date: '1980',
        pages: '452',
        synopsis: 'Unfinished Tales of Númenor and Middle-earth is a collection of stories and essays by J. R. R. Tolkien that were never completed during his lifetime, but were later edited by his son Christopher Tolkien and published to commercial success in 1980.',
        image: 'images/unfinished.jpg',
        status: 'unread'
    },
];

// HTML INJECTION

function addBookToPage(title, date, pages, synopsis, image, status) {

    const bookMarkUp = `
        <div class="book">
            <div class="image">
                <img src="${imagePath.test(image) ? image : 'images/missing.jpg'}" alt="">
            </div>
            <div class="details">
                <h2 class="title">${title}</h2>
                <div class="info">
                    <span class="data">published: <strong>${date}</strong></span>
                    <span class="data">pages: <strong>${pages}</strong></span>
                </div>
                <p class="synopsis">${synopsis}</p>
                <div class="action">
                    <button class="button ${status}">${status === 'read' ? 'Already read' : 'Mark as read'}</button>
                    <button class="button">Remove</button>
                </div>
            </div>
        </div>
    `;
    library.insertAdjacentHTML('beforeend', bookMarkUp);
}

currentLibrary.forEach((item) => {

    addBookToPage(item.title, item.date, item.pages, item.synopsis, item.image, item.status);
});