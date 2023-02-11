let myLibrary = [];


let addButton = document.querySelector('#add_text')


addButton.addEventListener('click', addBookToLibrary);


function Book(title, author, date, description) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.description = description;
    this.read = false;
    this.showText = () =>  console.log(`${this.title} was written in ${this.date} by ${this.author}.`);
}



function addBookToLibrary() {
    const PARAMS = ['#title', '#author', '#year_published', '#description']
    let newBook = []

    for (let i of PARAMS) {
        let val = document.querySelector(`${i}`);
        newBook.push(val.value);
        val.value='';
    }

    console.log(newBook)
    let addedBook = new Book(newBook[0], newBook[1], newBook[2], newBook[3])
    myLibrary.push(addedBook)
    console.table(myLibrary);
}

function addBookDOM() {
    let list = document.querySelector('.list');
    let listItem = list.appendChild(document.createElement('li'))
    book.classList.add('item');
    let book = 


}
