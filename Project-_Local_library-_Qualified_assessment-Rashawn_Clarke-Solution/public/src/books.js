function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++){
    if (authors[i].id === id){
      return authors[i]
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++){
    if (books[i].id === id){
      return books[i]
    }
  }
}
function booksNotReturned(books) {
     //filter() books into a new array that are Not Returned
     return books.filter((book) =>
       //some() method looks over book.borrows array, and one returned === false means book is Not Returned
       book.borrows.some((borrow) => borrow.returned === false)
     );
    }
    /*filter the books array into 2 arrays. for 1)books.borrows[i].returned: has a false;
    can use the helper function 'booksNotReturned' from line 19;
     and for 2) books.borrows[i].returned: are all true - these are returnedBooks;
     then return 2 arrays inside 1, can use the spread operator when combining them;
    declare variables for new arrays
    */


  function partitionBooksByBorrowedStatus(books) {
     //declare notReturned; use helper function booksNotReturned to build array of unreturned books
     var notReturned = booksNotReturned(books);
     //filter() books to build array of returnedBooks
     let returnedBooks = books.filter((book) =>
       //every() looks over book.borrows array for every returned === true
       book.borrows.every((borrow) => borrow.returned === true)
     );
     return [[...notReturned], [...returnedBooks]];
    }
  
  
  /*let booksAvailable = books.filter((book) => book.borrows.every((borrow) => book.borrows.returned === true))
  let booksUnavailable = books.filter((book) => book.borrows.some((borrow) => book.borrows.returned === false))
  let result = [[...booksUnavailable], [...booksAvailable]]
  return result*/


function getBorrowersForBook(book, accounts) {
   let x = book.borrows.map((borrow) => { let accountX = findAuthorById(accounts, borrow.id) 
   accountX.returned = borrow.returned 
   return accountX })
  let Answer = x.slice(0,10)
  return Answer
}
                    

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
