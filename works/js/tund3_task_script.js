/*
Ülesanne
Raamatu objekt
    1. Loo objekt raamat, millel on vähemalt kolm omadust: pealkiri, autor, aasta.
    2. Lisa meetod, mis kuvab raamatu kirjelduse.
    3. Lisa meetod, mis muudab väljaandmise aastat ja prindi tulemused konsooli.

Raamatukogu
    1. Loo objekt raamatukogu, mille omaduseks on raamatud (massiiv raamatutest).
    2. Lisa meetod, mis kuvab kõik raamatud kenasti konsoolis.
    3. Lisa meetod, mis lisab uue raamatu.
    4. Lisa meetod, mis kuvab raamatukogu raamatute koguarvu.
    5. Lisa meetod, mis arvutab, mitu raamatut on ilmunud pärast 2000. aastat.
    6. Koosta oma meetod ja kirjuta mida meetod tähendab
 */

function onLoad()
{
    library.AddBook(createBook("1984", "George Orwell", 1949, "1984 on düstoopiline romaan."));
    library.AddBook(createBook("The Hunger Games", "Suzanne Collins", 2008, "Düstoopiline võistlus ellujäämiseks."));
}

function createBook(title, author, year, description, price)
{
    let book = {
        title,
        author,
        year,
        description,
        price,

        ShowDescription()
        {
            console.log(
                "Pealkiri: " + this.title +
                "Autor: " + this.author +
                "Aasta: " + this.year +
                "Kirjeldus: " + this.description
            );
        },

        ChangeYear(newYear)
        {
            console.log("Uus aasta: " + newYear);
            console.log("Vana aasta: " + this.year);
            this.year = newYear;
        }
    };

    const books = document.getElementById("books");
    let booksText = "";

    for (let i = 0; i < library.books.length; i++)
    {
        booksText = booksText + library.books[i].title;
    }

    books.innerText = booksText;
    console.log(books);

    return book;
}

let library = {
    books: [],

    ShowAllBooks(books)
    {
        books.forEach((book) => book.ShowDescription());
    },

    ShowBooksCount()
    {
        console.log("Raamatute arv: " + this.books.length);
    },

    ShowBooksAfter2000()
    {
        const booksAfter2000 = this.books.filter(book => book.year > 2000);
        this.ShowAllBooks(booksAfter2000)
    },

    AddBook(book)
    {
        this.books.push(book);
    },

    // Eemaldab raamatu massiivist indeksi järgi.
    RemoveBook(index)
    {
        this.books.splice(index, 1);
    }
};
