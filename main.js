


function Book(title, author, year, description, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description;
    this.read = read;
    this.displayed = false;
    this.showText = () =>  console.log(`${this.title} was written in ${this.date} by ${this.author}.`);
}



function addBookToLibrary() {
    let newBook = []

    for (let i of PARAMS) {
        let val = document.querySelector(`#${i}`);
        if(val.type!=='checkbox') newBook.push(val.value);
        else newBook.push(val.checked);
        val.value='';
    }

    console.log(newBook)

    let addedBook = new Book(newBook[0], newBook[1], newBook[2], newBook[3], newBook[4], false)
    myLibrary.push(addedBook)
    console.table(myLibrary);
}

function updateDOMwithBook(){
    let list = document.querySelector('#list');
    let idx = -1;
    for(let book of myLibrary){
        idx = idx + 1;
        if(book.displayed==false){
            for(let j=0; j<=3; j++){
                let el = list.appendChild(document.createElement('div'));
                el.classList.add(`item-${PARAMS[j]}`);
                el.classList.add(`item`);
                el.dataset.idx = idx;
                el.textContent = book[PARAMS[j]];
                // console.log(book[PARAMS[j]]);
                // console.log(el);
            }
            let checkCont = list.appendChild(document.createElement('div'));
            let checkLabel = checkCont.appendChild(document.createElement('label'));
            let check =  checkCont.appendChild(document.createElement('input'));
            checkCont.dataset.idx = idx;
            check.type="checkbox"
            check.name = 'read';
            check.checked = book.read;
            check.classList.add('read');
            checkLabel.textContent = 'Read?';
            checkLabel.for = 'read;';
            checkCont.classList.add('item-check');
            let remCont = list.appendChild(document.createElement('div'))
            remCont.dataset.idx = idx;
            rem = remCont.appendChild(document.createElement('button'))
            rem.textContent = 'Remove';
            rem.dataset.idx = idx;
            rem.classList.add('remove-button');
            remCont.classList.add('rem');
            book.displayed = true;
        }

    }
}

function removeBookFromDOM(idx) {
    let book = document.querySelectorAll(`[data-idx='${idx}']`);
    book.forEach(book => book.remove());
}

function onAdd(){
    addBookToLibrary();
    updateDOMwithBook();
}

function onRem(e){
    let bookIdxToRemove = e.target.dataset.idx;
    console.log(e.target.idx);
    myLibrary.splice(bookIdxToRemove, 2);
    removeBookFromDOM(bookIdxToRemove);

}


const PARAMS = ['title', 'author', 'year', 'description', 'read'];

let myLibrary = [new Book('The Martian', 'Andy Weir', '2015', 'An engineer is stranded on Mars', true), 
                new Book('The Expanse', 'James Corey', '2011', 'Humanity has colonized the Asteroid Belt', true),
                new Book('Project Hail Mary', 'Andy Weir', '2021', 'The sun is gradually dimming, and one person must find out what\'s happening and fix it', false)
            ];


let addButton = document.querySelector('#add_text')
addButton.addEventListener('click', onAdd);
updateDOMwithBook();

let remove = document.querySelectorAll('.remove-button');
remove.forEach(buttn => buttn.addEventListener('click', onRem));
console.log(remove);


