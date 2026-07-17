// import { useState } from "react";
// function AvailableBooks() {
//   return (
//     <div className="message success">
//       <h3>Available Books</h3>
//       <p>You can borrow books from the library.</p>
//     </div>
//   );
// }
// function ClosedLibrary() {
//   return (
//     <div className="message danger">
//       <h3>Library Closed</h3>
//       <p>Please visit during working hours.</p>
//     </div>
//   );
// }
// function Conditional() {
//   const [libraryOpen, setLibraryOpen] = useState(true);
//   return (
//     <div className="section">
//       <h2>Library Access</h2>
//       <button
//         className="btn"
//         onClick={() => setLibraryOpen(!libraryOpen)}>
//         {libraryOpen ? "Close Library" : "Open Library"}
//       </button>
//       {libraryOpen ? <AvailableBooks /> : <ClosedLibrary />}
//     </div>
// );}
// export default Conditional;