// function MemberForm({
//   memberName,
//   email,
//   membership,
//   setMemberName,
//   setEmail,
//   setMembership,
//   editingId,
//   addMember,
//   updateMember,
//   cancelEdit,
// }) {
//   return (
//     <div className="form-card">

//       <h2>
//         {editingId ? "✏ Edit Gym Member" : "➕ Add New Gym Member"}
//       </h2>

//       <div className="form-group">

//         <div className="input-box">
//           <label>Member Name</label>

//           <input
//             type="text"
//             placeholder="Enter Member Name"
//             value={memberName}
//             onChange={(e) => setMemberName(e.target.value)}
//           />
//         </div>

//         <div className="input-box">
//           <label>Email Address</label>

//           <input
//             type="email"
//             placeholder="Enter Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="input-box">
//           <label>Membership Plan</label>

//           <select
//             value={membership}
//             onChange={(e) => setMembership(e.target.value)}
//           >
//             <option value="">Select Plan</option>
//             <option value="Basic">Basic</option>
//             <option value="Silver">Silver</option>
//             <option value="Gold">Gold</option>
//             <option value="Premium">Premium</option>
//           </select>
//         </div>

//       </div>

//       <div className="button-group">

//         {editingId ? (
//           <>
//             <button
//               className="update-btn"
//               onClick={updateMember}
//             >
//               💾 Update Member
//             </button>

//             <button
//               className="cancel-btn"
//               onClick={cancelEdit}
//             >
//               ❌ Cancel
//             </button>
//           </>
//         ) : (
//           <button
//             className="add-btn"
//             onClick={addMember}
//           >
//             ➕ Add Member
//           </button>
//         )}

//       </div>

//     </div>
//   );
// }

// export default MemberForm;