function getTotalBooksCount(books) {
  return books.length 
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  // filter method for each book 
  let filteredArray = books.filter((book) => book.borrows[0].returned === false)
  return filteredArray.length
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    const { genre } = book;
    if (!acc[genre]) acc[genre] = { name: genre, count: 1 };
    else acc[genre].count++;
    return acc;
  }, {});
  return Object.values(genres).sort(sortByPopularity).slice(0, 5);
}

// Helper function to help all popularity sorting
function sortByPopularity(item1, item2) {
  return item2.count - item1.count;
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  return books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    }
  }).sort((a, b) => b.count - a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
