// function List() {
//   const books = [
//   {
//    title: "Harry Potter and the Philosopher's Stone",
//    author: "J.K. Rowling",
//    category: "Fantasy",
//    year: 1997,
//    isbn: "9780747532699",
//    available: true,
//   },
//    {
//     title: "Lectures from Colombo to Almora",
//     author: "Swami Vivekananda",
//     category: "Inspirational",
//     year: 1897,
//     isbn: "9788175054066",
//     available: false,
//   },
//    {
//     title: "Wings of Fire",
//     author: "A.P.J Abdul Kalam",
//     category: "Biography",
//     year: 1999,
//     isbn: "9788173711466",
//     available: true,
//   },
//    {
//     title: "Wise and Otherwise",
//     author: "Sudha Murty",
//     category: "Inspirational Stories",
//     year: 2002,
//     isbn: "9780143333630",
//     available: true,
//   },
//   {
//     title: "Life of Pi",
//     author: "Yann Martel",
//     category: "Adventure Fiction",
//     year: 2001,
//     isbn: "9780156027328",
//     available: false,
//   },
//  ];
//   return (
//     <div className="section">
//       <h2>📚Book Library</h2>
//       <div className="card-container">
//         {books.map((book, index) => (
//           <div className="card" key={index}>
//             <h3>{book.title}</h3>
//             <p><strong>Author:</strong> {book.author}</p>
//             <p><strong>Category:</strong> {book.category}</p>
//             <p><strong>Year:</strong> {book.year}</p>
//             <p><strong>ISBN:</strong> {book.isbn}</p>
//             <p>
//               <strong>Status:</strong>
//               {book.available ? (
//                 <span className="available"> Available</span>) : 
//               (<span className="unavailable"> Not Available</span>)}
//             </p>
//           </div>
// ))}
//     </div>
//     </div>
// );}
// export default List;