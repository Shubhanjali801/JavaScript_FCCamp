const books = [
  { title: 'Atomic Habits', authorName: 'James Clear', releaseYear: 2018 },
  { title: 'The Embedded Entrepreneur', authorName: 'Arvid Kahl', releaseYear: 2021 },
  { title: 'Rich Dad Poor Dad', authorName: 'Robert Kiyosaki and Sharon Lechter', releaseYear: 1997 },
  { title: 'Dune', authorName: 'Frank Herbert', releaseYear: 1965 },
  { title: 'Sapiens: A Brief History of Humankind', authorName: 'Yuval Noah Harari', releaseYear: 2014 },
];


function sortByYear(book1,book2){
   if((book1.releaseYear) > book2.releaseYear) return 1;
   else if((book1.releaseYear) < book2.releaseYear) return -1;
   else return 0;
}

const filteredBooks = books.filter(book => book.releaseYear > 2000); 

filteredBooks.sort(sortByYear); 

console.log(filteredBooks);

// method used: arr.filter() 
// https://www.freecodecamp.org/learn/javascript-v9/lab-book-organizer/build-a-book-organizer
