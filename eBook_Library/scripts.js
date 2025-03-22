
const library = document.querySelector('.library');
const modalBox = document.querySelector('.modal');
const bookForm = document.querySelector('.dataform');

const images = '(?:jpg|jpeg|png|bmp|gif|svg|webp)';
const imagePath = new RegExp(`^(https?:\/\/.*\\.${images}|images\\/.*\\.${images})$`);

const randomID = () => crypto.randomUUID(); // generate random IDs

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
        status: 'read',
        identity: randomID(),
    },
    {
        title: 'The Lord of the Rings',
        date: '1954',
        pages: '1077',
        synopsis: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien\'s 1937 children\'s book The Hobbit but eventually developed into a much larger work.',
        image: 'images/lotr.jpg',
        status: 'read',
        identity: randomID(),
    },
    {
        title: 'The Silmarillion',
        date: '1977',
        pages: '480',
        synopsis: 'The Silmarillion is a book consisting of a collection of myths and stories in varying styles by the English writer J. R. R. Tolkien. It was edited, partly written, and published posthumously by his son Christopher Tolkien in 1977, assisted by Guy Gavriel Kay.',
        image: 'images/silmarillion.jpg',
        status: 'read',
        identity: randomID(),
    },
    {
        title: 'Unfinished Tales',
        date: '1980',
        pages: '452',
        synopsis: 'Unfinished Tales of Númenor and Middle-earth is a collection of stories and essays by J. R. R. Tolkien that were never completed during his lifetime, but were later edited by his son Christopher Tolkien and published to commercial success in 1980.',
        image: 'images/unfinished.jpg',
        status: 'unread',
        identity: randomID(),
    },
];

// HTML INJECTION

function addBookToPage(title, date, pages, synopsis, image, status, identity) {

    const bookMarkUp = `
        <div class="book" id="${identity}">
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
currentLibrary.forEach((item) => { // render default items

    addBookToPage(item.title, item.date, item.pages, item.synopsis, item.image, item.status, item.identity);
});

//  BOOK CONSTRUCTOR

function Book(title, date, pages, synopsis, image, status) {

    this.title = title;
    this.date = date;
    this.pages = pages;
    this.synopsis = synopsis;
    this.image = image;
    this.status = status;
    this.identity = randomID();
}

bookForm.addEventListener('submit', function(event) {

    event.preventDefault(); // prevent reload

    const inputs = [...bookForm.querySelectorAll('.input')];
    const inputCollection = inputs.map(input => input.value);
    const createBook = new Book(...inputCollection);

    currentLibrary.push(createBook); // add to library

    const last = currentLibrary.at(-1); // currently added

    addBookToPage(last.title, last.date, last.pages, last.synopsis, last.image, last.status, last.identity);
});