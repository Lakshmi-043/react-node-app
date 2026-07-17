// function MemberTable({ members, editMember, deleteMember }) {
//   return (
//     <div className="table-container">

//       <table className="member-table">

//         <thead>
//           <tr>
//             <th>Member ID</th>
//             <th>Member Name</th>
//             <th>Email Address</th>
//             <th>Membership Plan</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>

//           {members.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="no-data">
//                 No Members Found
//               </td>
//             </tr>
//           ) : (
//             members.map((member) => (
//               <tr key={member.id}>

//                 <td>GYM-{member.id}</td>

//                 <td>{member.memberName}</td>

//                 <td>{member.email}</td>

//                 <td>
//                   <span
//                     className={`plan-badge ${
//                       member.membership === "Premium"
//                         ? "premium"
//                         : member.membership === "Gold"
//                         ? "gold"
//                         : member.membership === "Silver"
//                         ? "silver"
//                         : "basic"
//                     }`}
//                   >
//                     {member.membership}
//                   </span>
//                 </td>

//                 <td className="action-buttons">

//                   <button
//                     className="edit-btn"
//                     onClick={() => editMember(member)}
//                   >
//                     ✏ Edit
//                   </button>

//                   <button
//                     className="delete-btn"
//                     onClick={() => deleteMember(member.id)}
//                   >
//                     🗑 Delete
//                   </button>

//                 </td>

//               </tr>
//             ))
//           )}

//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default MemberTable;