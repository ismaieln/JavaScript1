// 1
let books = [
  {
    title: "The Hobbit",
    author: "‎J. R. R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "‎J. R. R. Tolkien",
    alreadyRead: false,
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowlin",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  let bookName = books[i];
  let bookInfo = bookName.title + '" by ' + bookName.author;
  //console.log(bookInfo);

  if (bookName.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
