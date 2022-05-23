/*{
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
}*/

function findAccountById(accounts, id) {
  let result = {}
  for (let i = 0; i < accounts.length; i++){
    if (accounts[i].id === id){
      result = accounts[i]
    }
  }
  return result
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1))
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  books.forEach( ( book ) => {
  const borrowedBooks = book.borrows.filter(book => book.id === account.id);
    total += borrowedBooks.length; })
  return total
  }
  
  


function getBooksPossessedByAccount(account, books, authors) { 
  const result= []; books.map((book) => { book.borrows.map((borrow) => { authors.map((author) => { if (author.id === book.authorId) book["author"] = author; }); if (borrow.returned === false && borrow.id === account.id) { result.push(book); } }); })
  return result
}

   

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
