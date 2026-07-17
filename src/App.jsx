//Self Introduction Card
// import "./style.css";
// function App() {
//   return (
//     <div className="app">
//       <div className="profile-card">
//         <div className="profile-header">
//           <div className="profile-image">
//             SL
//           </div>
//           <h1>Sai Lakshmi</h1>
//           <p>Front End Developer</p>
//           </div>
//           <div className="profile-body">
//           <div className="info-card">
//           <h2>Education</h2>
//           <p>B.Tech in Computer Science and Engineering</p>
//           </div>
//           <div className="info-card">
//             <h2>Skills</h2>
//             <p>HTML, CSS, JavaScript, React JS</p>
//           </div>
//           <div className="info-card">
//             <h2>📍 Location</h2>
//             <p>Malkajgiri, Hyderabad</p>
//           </div>
//           <div className="info-card">
//             <h2>Hobbies</h2>
//             <p>Reading, Coding, Music, Painting</p>
//           </div>
//           <div className="info-card">
//             <h2>Career Goal</h2>
//             <p>
//               To become a successful Front End Developer and build
//               real-world web applications.
//             </p>
//           </div>
//           </div>
//           </div>
//   </div>
// );}
// export default App;

//User Profile Dashboard
// import "./style.css";
// function App() {
//   return (
//     <div className="container">
//       <h1>User Profile Dashboard</h1>
//       <div className="row">
//         <div className="user-card">
//         <div className="profile-icon">
//           👤
//         </div>
//         <h2>Lakshmi</h2>
//         <p><strong>Age:</strong> 25</p>
//         <p><strong>City:</strong> Hyderabad</p>
//         <p><strong>Phone:</strong> 9876543310</p>
//         </div>
//         <div className="user-card">
//           <div className="profile-icon">
//             👤
//           </div>
//           <h2>Ajay</h2>
//           <p><strong>Age:</strong> 24</p>
//           <p><strong>City:</strong> Chennai</p>
//           <p><strong>Phone:</strong> 9876543211</p>
//         </div>
//         </div>
//         <div className="row center">
//           <div className="user-card">
//         <div className="profile-icon">
//             👤
//         </div>
//         <h2>Manoj</h2>
//         <p><strong>Age:</strong> 23</p>
//         <p><strong>City:</strong> Bangalore</p>
//         <p><strong>Phone:</strong> 9876543222</p>
//         </div>
//         </div>
//         </div>
// );}
// export default App;

//Parents and User ptofile dashboard
// import Parent from "./Parent";
// import "./style.css";
// function App() {
//   return <Parent />;
// }
// export default App;

//Conditional And List Rendering
// import Conditional from "./conditional";
// import List from "./list";
// import "./style.css";
// function App() {
//   return (
//     <div className="app">
//       <h1>Book Library Management</h1>
//       <Conditional />
//       <List />
//     </div>
//   );}
// export default App;


//useState Hook Implementation...Temperature Dashboard
// import { useState } from "react";
// import "./style.css";
// function App() {
//   const [temperature, setTemperature] = useState(25);
//   const [darkTheme, setDarkTheme] = useState(true);
//   return (
//     <div className={darkTheme ? "app dark" : "app light"}>
//     <div className="dashboard">
//     <div className="header">
//       <div className="header-title">
//       <div className="home-icon">
//         🏠
//       </div>
//       <h1>Smart Home Dashboard</h1>
//       </div>
//       <div className="divider">
//       <span></span>
//       </div>
//       </div>
//     <div className="room-card">
//     <div className="room-header">
//       <div className="room-icon">
//         🛋️
//       </div>
//       <h2>Living Room</h2>
//       </div>
//     <div className="temperature-card">
//       <div className="temperature-icon">
//         🌡️
//       </div>
//       <div className="temperature-value">
//       {temperature}
//       <span>°C</span>
//     </div>
//     <p>Room Temperature</p>
//     </div>
//     </div>
//     <div className="button-group">
//       <button
//         className="btn increase"
//         onClick={() => setTemperature(temperature + 1)}
//     >
//       <div className="circle">
//         ▲
//       </div>
//       Increase
//       </button>
//       <button
//         className="btn decrease"
//         onClick={() => setTemperature(temperature - 1)}>
//       <div className="circle">
//         ▼
//       </div>
//       Decrease
//       </button>
//       <button
//         className="btn reset"
//         onClick={() => setTemperature(24)}>
//       <div className="circle">
//         ↻
//       </div>
//       Reset
//       </button>
//       </div>
//       <button
//           className="theme-button"
//           onClick={() => setDarkTheme(!darkTheme)}>
//           {darkTheme ? "🌙 Dark Theme" : "☀️ Light Theme"}
//       </button>
//       </div>
//     </div>
//   );}
// export default App;


//Registration Form Using useState Hook
// import RegistrationForm from "./RegistrationForm";
// import "./style.css";
// function App() {
//   return (
//     <div className="page">
//       <div className="card">
//         <RegistrationForm />
//       </div>
//     </div>
//   );
// }
// export default App;


//Fetch Data from API using useEffect
// import { useEffect, useState } from "react";
// import "./style.css";
// export default function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//     setLoading(true);
//     setError("");
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//   );
//   if (!res.ok) {
//   throw new Error("Failed to fetch users");
// }
// const data = await res.json();
//   setUsers(data);
//   } catch (err) {
//   setError(err.message);
//   } finally {
//   setLoading(false);
// }};
//   fetchUsers();
// }, []);
// const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(search.toLowerCase()) ||
//       user.username.toLowerCase().includes(search.toLowerCase())
// );
// return (
//     <div className="layout">
//       <aside className="sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li className="active">Users</li>
//           <li>Dashboard</li>
//           <li>Settings</li>
//           <li>Reports</li>
//         </ul>
//       </aside>
//       <main className="main">
//         <header className="topbar">
//           <h1>User Management Dashboard</h1>
//           <input
//             type="text"
//             className="search"
//             placeholder="Search by name or username..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </header>
//         {error && (
//           <div className="error-box">
//             <span className="error-icon">⚠️</span>
//             <div>
//               <h3>Something went wrong</h3>
//               <p>{error}</p>
//             </div>
//           </div>
//         )}
//         {loading && (
//   <>
//   <p className="info">Loading users...</p>
//   <div className="skeleton-table">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <div key={i} className="skeleton-row"></div>
//       ))}
//     </div>
//   </>
// )}
//     {!loading && !error && filteredUsers.length > 0 && (
//     <div className="table-wrapper">
//       <table className="table">
//         <thead>
//         <tr>
//           <th>User</th>
//           <th>Email</th>
//           <th>Phone Number</th>
//           <th>Website</th>
//         </tr>
//         </thead>
//         <tbody>
//         {filteredUsers.map((user) => (
//         <tr key={user.id}>
//         <td className="user-cell">
//           <img
//             src={`https://i.pravatar.cc/150?img=${user.id}`}
//             alt={user.name}
//           />
//           <div>
//             <strong>{user.name}</strong>
//             <p>@{user.username}</p>
//             </div>
//             </td>
//             <td>{user.email}</td>
//             <td>{user.phone}</td>
//             <td>{user.website}</td>
//             </tr>
// ))}
//             </tbody>
//             </table>
//           </div>
//         )}
//         {!loading && !error && filteredUsers.length === 0 && (
//           <div className="empty">
//             <h2>No Users Found</h2>
//             <p>Try searching with another name or username.</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );}


//MiniChatApp Application
// import { useState } from "react";
// import "./style.css";
// function App() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const profile =
//     "https://randomuser.me/api/portraits/women/44.jpg";
//     const group =
//     "https://randomuser.me/api/portraits/women/65.jpg";
//     const sendMessage = () => {
//     if (message.trim() === "") return;
//     const time = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     });
//     setMessages([
//       ...messages,
//       {
//         id: Date.now(),
//         name: "Sai Lakshmi",
//         text: message,
//         time,
//       },
// ]);
// setMessage("");
//   };
//   return (
//     <div className="app">
//       <div className="sidebar">
//         <h1 className="logo">ChatSphere</h1>
//         <div className="profile">
//           <img src={profile} alt="" />
//           <h2>Sai Lakshmi</h2>
//           <span className="online">
//             ✅ Online
//           </span>
//           </div>
//           <div className="menu">
//             <div className="menu-item active">
//             <span>✉ Chats</span>
//             <span className="badge">
//               {messages.length}
//             </span>
//           </div>
//           <div className="menu-item">
//             <span>🔔 Notifications</span>
//             <span className="badge">5</span>
//           </div>
//           <div className="menu-item">
//             ⭐ Favorites
//           </div>
//           <div className="menu-item">
//             📁 Files
//           </div>
//           <div className="menu-item">
//             ⚙ Settings
//           </div>
//           </div>
//           </div>
//       <div className="chat-container">
//         <div className="chat-header">
//         <div className="header-left">
//           <img
//               src={group}
//               alt=""
//             />
//           <div>
//               <h2>Development Team</h2>
//               <p>
//                 5 Members • Active Now
//               </p>
//           </div>
//           </div>
//           <div className="header-right">
//             <span>⌕</span>
//             <span>☎</span>
//             <span>🎦</span>
//             <span>⋮</span>
//             </div>
//             </div>
//               <div className="chat-body">
//           <div className="day-divider">
//             Today
//           </div>
//           {messages.length === 0 ? (
//             <div className="empty-chat">
//               <h2>👋 Welcome</h2>
//               <p>Start your first conversation.</p>
//             </div>
//             ) : (
//               messages.map((msg) => (
//               <div
//                 className="message-row"
//                 key={msg.id}
//               >
//                 <img
//                   src={profile}
//                   alt=""
//                   className="avatar"
//                 />
//                 <div className="message-card">
//                 <div className="message-top">
//                 <span className="user">
//                     {msg.name}
//                 </span>
//                 <span className="time">
//                     {msg.time}
//                 </span>
//                 </div>
//                 <p className="message-text">
//                     {msg.text}
//                 </p>
//                 <div className="status">
//                     ✅✅
//                 </div>
//                 </div>
//                 </div>
//                 ))
//                 )}
//                 </div>
//                 <div className="chat-footer">
//           <button>😊</button>
//           <button>🔗</button>
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={message}
//             onChange={(e) =>
//               setMessage(e.target.value)
//             }
//             onKeyDown={(e) => {
//               if (e.key === "Enter")
//                 sendMessage();
//             }}
//           />
//           <button
//             className="send-btn"
//             onClick={sendMessage}
//           >
//             ➤
//           </button>
//           </div>
//           </div>
//           </div>
//           );}
// export default App; 

//useRef Hook Implementation
// import { useRef, useState } from "react";
// import "./style.css";
// export default function App() { 
//   const fileInputRef = useRef(null);
//   const [profileImage, setProfileImage] = useState(
//     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
//   );
//   const [likes, setLikes] = useState(500);
//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };
//   const handleImageChange = (e) => {
//   const file = e.target.files[0];
//   if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setProfileImage(imageURL);
//     }};
//     const handleLike = () => {
//     setLikes((prev) => prev + 1);
//   };
//   return (
//     <div className="app">
//     <div className="phone">
//     <div className="navbar">
//     <h1 className="logo">PicSphere</h1>
//     </div>
//     <div className="cover"></div>
//     <div className="profile">
//      <img
//         src={profileImage}
//         alt="Profile"
//         className="profile-img"
//       />
//       <h2>Sai Lakshmi</h2>
//       <p className="username">
//           @react_developer
//       </p>
//       <div className="stats">
//         <div>
//        <h3>18</h3>
//        <p>Posts 📷</p>
//       </div>
//       <div>
//        <h3>4.5K</h3>
//        <p>Followers</p>
//       </div>
//       <div>
//        <h3>320</h3>
//        <p>Following</p>
//             </div>
//             </div>
//         <h3 className="designation">
//           Front-End Developer ⭐
//         </h3>
//         <p className="skills">
//           React JS | JavaScript | HTML | CSS
//         </p>
//         <input
//           type="file"
//           accept="image/*"
//           ref={fileInputRef}
//           onChange={handleImageChange}
//           hidden
//         />
//         <button
//           className="upload-btn"
//           onClick={handleUploadClick}
//           >
//           Change Profile Photo
//           </button>
//           <div className="like-container">
//             <button
//               className="like-btn"
//               onClick={handleLike}
//             >
//             ❤️ Like
//             </button>
//             <button
//              className="likes-count-btn"
//               disabled
//             >
//             ❤️ {likes}
//             </button>
//             </div>
//             </div>
//             </div>
//             </div>
//   );}


//useContext Hook Implementation
// import React, { useState, useEffect } from "react";
// import "./style.css";
// import AppContext from "./Context";
// import Component1 from "./components/Component1";
// function App() {
//   const [theme, setTheme] = useState("light");
//   const [search, setSearch] = useState("");
//   const [cartCount] = useState(3);
//   const [notification] = useState(5);
//   const [favorite, setFavorite] = useState(false);
//   const [location] = useState("Hyderabad");
//   const [userName] = useState("Sai Lakshmi");
//   const [greeting, setGreeting] = useState("");
//   const [time, setTime] = useState("");
//   const today = new Date().toLocaleDateString();
//   const [orderData, setOrderData] = useState({
//     customerName: "",
//     mobile: "",
//     email: "",
//     dob: "",
//     gender: "",
//     restaurant: "",
//     foodItem: "",
//     quantity: "",
//     payment: "",
//     coupon: "",
//     address: "",
//     city: "",
//     pincode: "",
//     landmark: "",
//     instructions: "",
//   });
//   const [totalPrice] = useState(525);
//   const [deliveryStatus] = useState("👨‍🍳 Preparing Your Food");
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };
//   const toggleFavorite = () => {
//     setFavorite(!favorite);
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("🍔 Order Placed Successfully!");
//     console.log(orderData);
//   };
//   const resetForm = () => {
//     setOrderData({
//       customerName: "",
//       mobile: "",
//       email: "",
//       dob: "",
//       gender: "",
//       restaurant: "",
//       foodItem: "",
//       quantity: "",
//       payment: "",
//       coupon: "",
//       address: "",
//       city: "",
//       pincode: "",
//       landmark: "",
//       instructions: "",
//     });
//   };
//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const hour = now.getHours();
//       setTime(now.toLocaleTimeString());
//       if (hour < 12) {
//         setGreeting("🌞 Good Morning");
//       } else if (hour < 17) {
//         setGreeting("☀️ Good Afternoon");
//       } else {
//         setGreeting("🌙 Good Evening");
//       }};
//       updateClock();
//       const interval = setInterval(updateClock, 1000);
//       return () => clearInterval(interval);
//     }, []);
//     return (
//     <AppContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//         search,
//         setSearch,
//         cartCount,
//         notification,
//         favorite,
//         toggleFavorite,
//         location,
//         userName,
//         greeting,
//         time,
//         today,
//         orderData,
//         handleChange,
//         handleSubmit,
//         resetForm,
//         totalPrice,
//         deliveryStatus,
//       }}
//     >
// <div className={`app ${theme}`}>
// <div className="container">
//     <header className="navbar">
//       <div className="logo">
//         <h1>🍔 FoodExpress</h1>
//         <p>Fresh Food Delivered Fast 🚀</p>
//       </div>
//       <div className="search-bar">
//         <span>🔍</span>
//         <input
//           type="text"
//           placeholder="Search Pizza, Burger, Biryani..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         </div>
//         <div className="nav-icons">
//         <button
//           className="theme-btn"
//           onClick={toggleTheme}
//         >
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//         <button
//           className="icon-btn"
//           onClick={toggleFavorite}
//         >
//           {favorite ? "❤️" : "🤍"}
//         </button>
//         <button className="icon-btn">
//           🛒
//           <span className="badge">
//             {cartCount}
//           </span>
//         </button>
//         <button className="icon-btn">
//           🔔
//           <span className="badge">
//             {notification}
//           </span>
//         </button>
//         <div className="profile">
//           👤
//         <span>{userName}</span>
//         </div>
//         </div>
//         </header>
//     <div className="welcome-card">
//       <div>
//         <h2>{greeting}, {userName} 👋</h2>
//         <p>
//           📍 Delivering To :
//         <strong> {location}</strong>
//         </p>
//         </div>
//         <div className="date-time">
//           <h3>📅 {today}</h3>
//           <h3>⏰ {time}</h3>
//           </div>
//           </div>
//     <div className="quick-features">
//       <div className="feature-card">
//         🚚
//         <h3>Fast Delivery</h3>
//         <p>20-30 mins</p>
//       </div>
//       <div className="feature-card">
//         ⭐
//         <h3>Top Rated</h3>
//         <p>4.9 Rating</p>
//       </div>
//       <div className="feature-card">
//         💰
//         <h3>Free Delivery</h3>
//         <p>Above ₹499</p>
//       </div>
//       <div className="feature-card">
//         🎁
//         <h3>Coupons</h3>
//         <p>Save ₹100</p>
//       </div>
//       </div>
//       <div className="offer-banner">
//         <div className="offer-card">
//         <h2>🔥 Flat 50% OFF</h2>
//         <p>Use Coupon <strong>FOOD50</strong></p>
//        </div>
//        <div className="offer-card">
//         <h2>🎁 Buy 1 Get 1 Free</h2>
//         <p>On Selected Burgers</p>
//        </div>
//        <div className="offer-card">
//         <h2>🚚 Free Delivery</h2>
//         <p>Orders Above ₹499</p>
//        </div>
//        </div>
//        <div className="special-section">
//         <h2>🔥 Today's Specials</h2>
//         <div className="special-grid">
//           <div className="special-card">
//             <h3>🍕 Farm House Pizza</h3>
//             <p>⭐ 4.9 Rating</p>
//             <p>₹299</p>
//             <button>Order Now</button>
//           </div>
//           <div className="special-card">
//             <h3>🍔 Cheese Burger</h3>
//             <p>⭐ 4.8 Rating</p>
//             <p>₹199</p>
//             <button>Order Now</button>
//           </div>
//           <div className="special-card">
//             <h3>🍗 Chicken Bucket</h3>
//             <p>⭐ 4.7 Rating</p>
//             <p>₹499</p>
//            <button>Order Now</button>
//           </div>
//         <div className="special-card">
//           <h3>🥤 Coke Combo</h3>
//           <p>⭐ 4.6 Rating</p>
//           <p>₹99</p>
//          <button>Order Now</button>
//          </div>
//          </div>
//          </div>
//          <div className="combo-section">
//           <h2>🍽 Combo Deals</h2>
//           <div className="combo-grid">
//             <div className="combo-card">
//               🍔 + 🍟 + 🥤
//              <h3>Classic Combo</h3>
//              <p>₹299</p>
//             </div>
//             <div className="combo-card">
//               🍕 + 🥤
//               <h3>Pizza Combo</h3>
//               <p>₹399</p>
//             </div>
//             <div className="combo-card">
//                🍗 + 🍟 + 🥤
//                <h3>Chicken Combo</h3>
//                <p>₹499</p>
//             </div>
//             </div>
//             </div>
//             <div className="limited-offer">
//               <h2>⏳ Limited Time Offers</h2>
//             <div className="limited-grid">
//             <div className="limited-card">
//                🎉 Weekend Special
//             <p>Extra 20% OFF</p>
//            </div>
//            <div className="limited-card">
//               💳 Pay with UPI
//             <p>Save ₹100</p>
//            </div>
//            <div className="limited-card">
//              🎁 First Order
//             <p>Free Dessert</p>
//           </div>
//           <div className="limited-card">
//              🚚 Midnight Delivery
//              <p>Available Till 2 AM</p>
//     </div>
//     </div>
//     </div>
// <section className="categories-section">
//   <h2>🍽 Browse by Categories</h2>
//   <div className="categories-grid">
//     <div className="category-card">
//       🍕
//     <h3>Pizza</h3>
//     <p>25 Items</p>
//     </div>
//     <div className="category-card">
//       🍔
//     <h3>Burger</h3>
//     <p>18 Items</p>
//     </div>
//     <div className="category-card">
//       🍗
//     <h3>Chicken</h3>
//     <p>30 Items</p>
//     </div>
//     <div className="category-card">
//       🍜
//     <h3>Noodles</h3>
//     <p>15 Items</p>
//     </div>
//     <div className="category-card">
//       🍚
//     <h3>Biryani</h3>
//     <p>20 Items</p>
//     </div>
//     <div className="category-card">
//       🍟
//     <h3>Fries</h3>
//     <p>12 Items</p>
//     </div>
//     <div className="category-card">
//       🥤
//     <h3>Drinks</h3>
//     <p>22 Items</p>
//     </div>
//     <div className="category-card">
//       🍰
//     <h3>Desserts</h3>
//     <p>14 Items</p>
//     </div>
//     </div>
//     </section>
// <section className="restaurant-section">
//   <h2>⭐ Popular Restaurants Near You</h2>
//   <div className="restaurant-grid">
//     <div className="restaurant-card">
//     <div className="restaurant-image">🍕</div>
//     <h3>Domino's Pizza</h3>
//     <p>⭐⭐⭐⭐⭐ 4.9</p>
//     <p>🚚 20 mins</p>
//     <p>💰 ₹250 for two</p>
//     <button>❤️ Favourite</button>
//   </div>
//   <div className="restaurant-card">
//   <div className="restaurant-image">🍔</div>
//   <h3>Burger King</h3>
//   <p>⭐⭐⭐⭐☆ 4.8</p>
//   <p>🚚 18 mins</p>
//   <p>💰 ₹220 for two</p>
//   <button>❤️ Favourite</button>
//   </div>
//   <div className="restaurant-card">
//     <div className="restaurant-image">🍗</div>
//     <h3>KFC</h3>
//     <p>⭐⭐⭐⭐⭐ 4.8</p>
//     <p>🚚 25 mins</p>
//     <p>💰 ₹350 for two</p>
//     <button>❤️ Favourite</button>
//     </div>
//     <div className="restaurant-card">
//       <div className="restaurant-image">🍚</div>
//       <h3>Paradise Biryani</h3>
//       <p>⭐⭐⭐⭐⭐ 4.9</p>
//       <p>🚚 28 mins</p>
//       <p>💰 ₹450 for two</p>
//       <button>❤️ Favourite</button>
//       </div>
//       </div>
//       </section>
// <section className="trending-section">
//   <h2>🔥 Trending This Week</h2>
//   <div className="trending-grid">
//     <div className="trend-card">
//       🍕 Pepperoni Pizza
//     </div>
//     <div className="trend-card">
//       🍔 Double Cheese Burger
//     </div>
//     <div className="trend-card">
//       🍗 Crispy Chicken
//     </div>
//     <div className="trend-card">
//       🍜 Hakka Noodles
//     </div>
//     <div className="trend-card">
//       🍰 Chocolate Cake
//     </div>
//     <div className="trend-card">
//       🥤 Cold Coffee
//     </div>
//     </div>
// </section>
// <section className="best-seller">
// <h2>🏆 Best Sellers</h2>
// <div className="seller-grid">
// <div className="seller-card">
// 🥇 Farm House Pizza
// <p>⭐4.9</p>
// <p>₹299</p>
// </div>
// <div className="seller-card">
// 🥈 Chicken Bucket
// <p>⭐4.8</p>
// <p>₹499</p>
// </div>
// <div className="seller-card">
// 🥉 Cheese Burger
// <p>⭐4.7</p>
// <p>₹199</p>
// </div>
// <div className="seller-card">
// 🏅 Veg Biryani
// <p>⭐4.8</p>
// <p>₹249</p>
// </div>
// </div>
// </section>
// <section className="stats-section">
// <h2>📊 FoodExpress Statistics</h2>
// <div className="stats-grid">
// <div className="stats-card">
//       🍽
//     <h3>500+</h3>
//     <p>Restaurants</p>
// </div>
// <div className="stats-card">
//       😊
//     <h3>10K+</h3>
//     <p>Happy Customers</p>
// </div>
// <div className="stats-card">
//       🛵
//     <h3>250+</h3>
//     <p>Delivery Partners</p>
// </div>
// <div className="stats-card">
//       ⭐
//     <h3>4.9</h3>
//     <p>Average Rating</p>
// </div>
// </div>
// </section>
// <section className="recommend-section">
// <h2>🎯 Recommended For You</h2>
// <div className="recommend-grid">
// <div className="recommend-card">
//       🍕
//     <h3>Margherita Pizza</h3>
//     <p>₹249</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     <div className="recommend-card">
//       🍔
//     <h3>Veg Burger</h3>
//     <p>₹179</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     <div className="recommend-card">
//       🍜
//     <h3>Chicken Noodles</h3>
//     <p>₹220</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     <div className="recommend-card">
//       🍰
//     <h3>Chocolate Cake</h3>
//     <p>₹150</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     </div>
//     </section>
// <section className="chef-section">
// <h2>👨‍🍳 Meet Our Top Chefs</h2>
// <div className="chef-grid">
// <div className="chef-card">
//       👨‍🍳
//     <h3>Chef Rahul</h3>
//     <p>Italian Specialist</p>
//     <p>⭐ 4.9</p>
//     </div>
//     <div className="chef-card">
//       👩‍🍳
//       <h3>Chef Priya</h3>
//       <p>Indian Cuisine</p>
//       <p>⭐ 4.8</p>
//     </div>
//     <div className="chef-card">
//       👨‍🍳
//       <h3>Chef Arjun</h3>
//       <p>Fast Food Expert</p>
//       <p>⭐ 4.9</p>
//     </div>
//     </div>
//     </section>
// <section className="delivery-section">
// <h2>🛵 Delivery Partners</h2>
// <div className="delivery-grid">
// <div className="delivery-card">
//       🚴 Rahul
//       <p>⭐ 4.8</p>
//       <p>Deliveries : 2500+</p>
//     </div>
//     <div className="delivery-card">
//       🛵 Akash
//       <p>⭐ 4.9</p>
//       <p>Deliveries : 3200+</p>
//     </div>
//     <div className="delivery-card">
//       🚴 Sneha
//       <p>⭐ 5.0</p>
//       <p>Deliveries : 2800+</p>
//     </div>
//     </div>
//     </section>
// <section className="premium-section">
// <div className="premium-card">
// <h2>💎 FoodExpress Gold</h2>
// <p>Unlimited Free Delivery</p>
// <p>Extra 20% Discounts</p>
// <p>Priority Customer Support</p>
// <button>Join Membership 👑</button>
// </div>
// </section>
// <section className="new-section">
// <h2>🆕 Newly Added Restaurants</h2>
// <div className="new-grid">
// <div className="new-card">
// 🌮 Taco Bell
// <p>⭐4.7</p>
// <p>20 mins</p>
// </div>
// <div className="new-card">
// 🍣 Sushi House
// <p>⭐4.8</p>
// <p>30 mins</p>
// </div>
// <div className="new-card">
// 🥙 Arabian Nights
// <p>⭐4.9</p>
// <p>25 mins</p>
// </div>
// <div className="new-card">
// 🥪 Subway
// <p>⭐4.8</p>
// <p>18 mins</p>
// </div>
// </div>
// </section>
// <section className="review-section">
// <h2>💬 Customer Reviews</h2>
// <div className="review-grid">
// <div className="review-card">
// 😊
// <h3>Rohit</h3>
// <p>"Amazing Food & Fast Delivery!"</p>
// ⭐⭐⭐⭐⭐
// </div>
// <div className="review-card">
// 😍
// <h3>Ananya</h3>
// <p>"Loved the Pizza Combo."</p>
// ⭐⭐⭐⭐⭐
// </div>
// <div className="review-card">
// 🤩
// <h3>Kiran</h3>
// <p>"Best Delivery Experience."</p>
// ⭐⭐⭐⭐☆
// </div>
// </div>
// </section>
// <form onSubmit={handleSubmit}>
// <Component1 />
// </form>
//       </div>
//         </div>
//         </AppContext.Provider>
// );}
// export default App;


//useContext Hook Implementation
// import { useReducer } from "react";
// import "./style.css";

// const initialState = {
//   darkTheme: false,

//   firstName: "",
//   lastName: "",
//   email: "",
//   mobile: "",

//   password: "",
//   confirmPassword: "",

//   address: "",
//   city: "",
//   state: "",
//   country: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "UPDATE_FIELD":
//       return {
//         ...state,
//         [action.field]: action.value,
//       };

//     case "TOGGLE_THEME":
//       return {
//         ...state,
//         darkTheme: !state.darkTheme,
//       };

//     case "RESET":
//       return initialState;

//     default:
//       return state;
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className={state.darkTheme ? "app dark" : "app"}>

//       {/* Overall Box */}
//       <div className="overall-box">

//         <h1>Registration Form</h1>

//         <button
//           className="theme-btn"
//           onClick={() => dispatch({ type: "TOGGLE_THEME" })}
//         >
//           {state.darkTheme ? "☀ Light Theme" : "🌙 Dark Theme"}
//         </button>

//         {/* Outer Box */}
//         <div className="outer-box">

//           {/* Middle Box */}
//           <div className="middle-box">

//             {/* Form Container */}
//             <div className="form-container">

//               {/* Personal Information */}

//               <div className="section personal">

//                 <h2>Personal Information</h2>

//                 <div className="row">

//                   <div className="input-group">
//                     <label>First Name</label>

//                     <input
//                       type="text"
//                       value={state.firstName}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "firstName",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                   <div className="input-group">
//                     <label>Last Name</label>

//                     <input
//                       type="text"
//                       value={state.lastName}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "lastName",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                   <div className="input-group">
//                     <label>Email</label>

//                     <input
//                       type="email"
//                       value={state.email}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "email",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                 </div>

//                 <div className="row">

//                   <div className="input-group">
//                     <label>Mobile Number</label>

//                     <input
//                       type="number"
//                       value={state.mobile}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "mobile",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                 </div>

//               </div>
//                             {/* Account Information */}
//               <div className="section account">

//                 <h2>Account Information</h2>

//                 <div className="row">

//                   <div className="input-group">
//                     <label>Password</label>

//                     <input
//                       type="password"
//                       value={state.password}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "password",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                   <div className="input-group">
//                     <label>Confirm Password</label>

//                     <input
//                       type="password"
//                       value={state.confirmPassword}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "confirmPassword",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                 </div>

//               </div>

//               {/* Address Information */}

//               <div className="section address">

//                 <h2>Address Information</h2>

//                 <div className="row">

//                   <div className="input-group">
//                     <label>Address</label>

//                     <textarea
//                       rows="4"
//                       value={state.address}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "address",
//                           value: e.target.value,
//                         })
//                       }
//                     ></textarea>

//                   </div>

//                 </div>

//                 <div className="row">

//                   <div className="input-group">
//                     <label>City</label>

//                     <input
//                       type="text"
//                       value={state.city}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "city",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                   <div className="input-group">
//                     <label>State</label>

//                     <input
//                       type="text"
//                       value={state.state}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "state",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                   <div className="input-group">
//                     <label>Country</label>

//                     <input
//                       type="text"
//                       value={state.country}
//                       onChange={(e) =>
//                         dispatch({
//                           type: "UPDATE_FIELD",
//                           field: "country",
//                           value: e.target.value,
//                         })
//                       }
//                     />
//                   </div>

//                 </div>

//                 <div className="buttons">

//                   <button
//                     className="submit-btn"
//                     onClick={() =>
//                       alert("Registration Successful")
//                     }
//                   >
//                     Submit
//                   </button>

//                   <button
//                     className="reset-btn"
//                     onClick={() =>
//                       dispatch({ type: "RESET" })
//                     }
//                   >
//                     Reset
//                   </button>

//                 </div>

//               </div>

//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }


//Routing Implementation
// import React, { useState, useEffect } from "react";
// import "./style.css";
// import AppContext from "./Context";
// import Component1 from "./components/Component1";
// function App() {
//   const [theme, setTheme] = useState("light");
//   const [search, setSearch] = useState("");
//   const [cartCount] = useState(3);
//   const [notification] = useState(5);
//   const [favorite, setFavorite] = useState(false);
//   const [location] = useState("Hyderabad");
//   const [userName] = useState("Sai Lakshmi");
//   const [greeting, setGreeting] = useState("");
//   const [time, setTime] = useState("");
//   const today = new Date().toLocaleDateString();
//   const [orderData, setOrderData] = useState({
//     customerName: "",
//     mobile: "",
//     email: "",
//     dob: "",
//     gender: "",
//     restaurant: "",
//     foodItem: "",
//     quantity: "",
//     payment: "",
//     coupon: "",
//     address: "",
//     city: "",
//     pincode: "",
//     landmark: "",
//     instructions: "",
//   });
//   const [totalPrice] = useState(525);
//   const [deliveryStatus] = useState("👨‍🍳 Preparing Your Food");
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };
//   const toggleFavorite = () => {
//     setFavorite(!favorite);
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("🍔 Order Placed Successfully!");
//     console.log(orderData);
//   };
//   const resetForm = () => {
//     setOrderData({
//       customerName: "",
//       mobile: "",
//       email: "",
//       dob: "",
//       gender: "",
//       restaurant: "",
//       foodItem: "",
//       quantity: "",
//       payment: "",
//       coupon: "",
//       address: "",
//       city: "",
//       pincode: "",
//       landmark: "",
//       instructions: "",
//     });
//   };
//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const hour = now.getHours();
//       setTime(now.toLocaleTimeString());
//       if (hour < 12) {
//         setGreeting("🌞 Good Morning");
//       } else if (hour < 17) {
//         setGreeting("☀️ Good Afternoon");
//       } else {
//         setGreeting("🌙 Good Evening");
//       }};
//       updateClock();
//       const interval = setInterval(updateClock, 1000);
//       return () => clearInterval(interval);
//     }, []);
//     return (
//     <AppContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//         search,
//         setSearch,
//         cartCount,
//         notification,
//         favorite,
//         toggleFavorite,
//         location,
//         userName,
//         greeting,
//         time,
//         today,
//         orderData,
//         handleChange,
//         handleSubmit,
//         resetForm,
//         totalPrice,
//         deliveryStatus,
//       }}
//     >
// <div className={`app ${theme}`}>
// <div className="container">
//     <header className="navbar">
//       <div className="logo">
//         <h1>🍔 FoodExpress</h1>
//         <p>Fresh Food Delivered Fast 🚀</p>
//       </div>
//       <div className="search-bar">
//         <span>🔍</span>
//         <input
//           type="text"
//           placeholder="Search Pizza, Burger, Biryani..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         </div>
//         <div className="nav-icons">
//         <button
//           className="theme-btn"
//           onClick={toggleTheme}
//         >
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//         <button
//           className="icon-btn"
//           onClick={toggleFavorite}
//         >
//           {favorite ? "❤️" : "🤍"}
//         </button>
//         <button className="icon-btn">
//           🛒
//           <span className="badge">
//             {cartCount}
//           </span>
//         </button>
//         <button className="icon-btn">
//           🔔
//           <span className="badge">
//             {notification}
//           </span>
//         </button>
//         <div className="profile">
//           👤
//         <span>{userName}</span>
//         </div>
//         </div>
//         </header>
//     <div className="welcome-card">
//       <div>
//         <h2>{greeting}, {userName} 👋</h2>
//         <p>
//           📍 Delivering To :
//         <strong> {location}</strong>
//         </p>
//         </div>
//         <div className="date-time">
//           <h3>📅 {today}</h3>
//           <h3>⏰ {time}</h3>
//           </div>
//           </div>
//     <div className="quick-features">
//       <div className="feature-card">
//         🚚
//         <h3>Fast Delivery</h3>
//         <p>20-30 mins</p>
//       </div>
//       <div className="feature-card">
//         ⭐
//         <h3>Top Rated</h3>
//         <p>4.9 Rating</p>
//       </div>
//       <div className="feature-card">
//         💰
//         <h3>Free Delivery</h3>
//         <p>Above ₹499</p>
//       </div>
//       <div className="feature-card">
//         🎁
//         <h3>Coupons</h3>
//         <p>Save ₹100</p>
//       </div>
//       </div>
//       <div className="offer-banner">
//         <div className="offer-card">
//         <h2>🔥 Flat 50% OFF</h2>
//         <p>Use Coupon <strong>FOOD50</strong></p>
//        </div>
//        <div className="offer-card">
//         <h2>🎁 Buy 1 Get 1 Free</h2>
//         <p>On Selected Burgers</p>
//        </div>
//        <div className="offer-card">
//         <h2>🚚 Free Delivery</h2>
//         <p>Orders Above ₹499</p>
//        </div>
//        </div>
//        <div className="special-section">
//         <h2>🔥 Today's Specials</h2>
//         <div className="special-grid">
//           <div className="special-card">
//             <h3>🍕 Farm House Pizza</h3>
//             <p>⭐ 4.9 Rating</p>
//             <p>₹299</p>
//             <button>Order Now</button>
//           </div>
//           <div className="special-card">
//             <h3>🍔 Cheese Burger</h3>
//             <p>⭐ 4.8 Rating</p>
//             <p>₹199</p>
//             <button>Order Now</button>
//           </div>
//           <div className="special-card">
//             <h3>🍗 Chicken Bucket</h3>
//             <p>⭐ 4.7 Rating</p>
//             <p>₹499</p>
//            <button>Order Now</button>
//           </div>
//         <div className="special-card">
//           <h3>🥤 Coke Combo</h3>
//           <p>⭐ 4.6 Rating</p>
//           <p>₹99</p>
//          <button>Order Now</button>
//          </div>
//          </div>
//          </div>
//          <div className="combo-section">
//           <h2>🍽 Combo Deals</h2>
//           <div className="combo-grid">
//             <div className="combo-card">
//               🍔 + 🍟 + 🥤
//              <h3>Classic Combo</h3>
//              <p>₹299</p>
//             </div>
//             <div className="combo-card">
//               🍕 + 🥤
//               <h3>Pizza Combo</h3>
//               <p>₹399</p>
//             </div>
//             <div className="combo-card">
//                🍗 + 🍟 + 🥤
//                <h3>Chicken Combo</h3>
//                <p>₹499</p>
//             </div>
//             </div>
//             </div>
//             <div className="limited-offer">
//               <h2>⏳ Limited Time Offers</h2>
//             <div className="limited-grid">
//             <div className="limited-card">
//                🎉 Weekend Special
//             <p>Extra 20% OFF</p>
//            </div>
//            <div className="limited-card">
//               💳 Pay with UPI
//             <p>Save ₹100</p>
//            </div>
//            <div className="limited-card">
//              🎁 First Order
//             <p>Free Dessert</p>
//           </div>
//           <div className="limited-card">
//              🚚 Midnight Delivery
//              <p>Available Till 2 AM</p>
//     </div>
//     </div>
//     </div>
// <section className="categories-section">
//   <h2>🍽 Browse by Categories</h2>
//   <div className="categories-grid">
//     <div className="category-card">
//       🍕
//     <h3>Pizza</h3>
//     <p>25 Items</p>
//     </div>
//     <div className="category-card">
//       🍔
//     <h3>Burger</h3>
//     <p>18 Items</p>
//     </div>
//     <div className="category-card">
//       🍗
//     <h3>Chicken</h3>
//     <p>30 Items</p>
//     </div>
//     <div className="category-card">
//       🍜
//     <h3>Noodles</h3>
//     <p>15 Items</p>
//     </div>
//     <div className="category-card">
//       🍚
//     <h3>Biryani</h3>
//     <p>20 Items</p>
//     </div>
//     <div className="category-card">
//       🍟
//     <h3>Fries</h3>
//     <p>12 Items</p>
//     </div>
//     <div className="category-card">
//       🥤
//     <h3>Drinks</h3>
//     <p>22 Items</p>
//     </div>
//     <div className="category-card">
//       🍰
//     <h3>Desserts</h3>
//     <p>14 Items</p>
//     </div>
//     </div>
//     </section>
// <section className="restaurant-section">
//   <h2>⭐ Popular Restaurants Near You</h2>
//   <div className="restaurant-grid">
//     <div className="restaurant-card">
//     <div className="restaurant-image">🍕</div>
//     <h3>Domino's Pizza</h3>
//     <p>⭐⭐⭐⭐⭐ 4.9</p>
//     <p>🚚 20 mins</p>
//     <p>💰 ₹250 for two</p>
//     <button>❤️ Favourite</button>
//   </div>
//   <div className="restaurant-card">
//   <div className="restaurant-image">🍔</div>
//   <h3>Burger King</h3>
//   <p>⭐⭐⭐⭐☆ 4.8</p>
//   <p>🚚 18 mins</p>
//   <p>💰 ₹220 for two</p>
//   <button>❤️ Favourite</button>
//   </div>
//   <div className="restaurant-card">
//     <div className="restaurant-image">🍗</div>
//     <h3>KFC</h3>
//     <p>⭐⭐⭐⭐⭐ 4.8</p>
//     <p>🚚 25 mins</p>
//     <p>💰 ₹350 for two</p>
//     <button>❤️ Favourite</button>
//     </div>
//     <div className="restaurant-card">
//       <div className="restaurant-image">🍚</div>
//       <h3>Paradise Biryani</h3>
//       <p>⭐⭐⭐⭐⭐ 4.9</p>
//       <p>🚚 28 mins</p>
//       <p>💰 ₹450 for two</p>
//       <button>❤️ Favourite</button>
//       </div>
//       </div>
//       </section>
// <section className="trending-section">
//   <h2>🔥 Trending This Week</h2>
//   <div className="trending-grid">
//     <div className="trend-card">
//       🍕 Pepperoni Pizza
//     </div>
//     <div className="trend-card">
//       🍔 Double Cheese Burger
//     </div>
//     <div className="trend-card">
//       🍗 Crispy Chicken
//     </div>
//     <div className="trend-card">
//       🍜 Hakka Noodles
//     </div>
//     <div className="trend-card">
//       🍰 Chocolate Cake
//     </div>
//     <div className="trend-card">
//       🥤 Cold Coffee
//     </div>
//     </div>
// </section>
// <section className="best-seller">
// <h2>🏆 Best Sellers</h2>
// <div className="seller-grid">
// <div className="seller-card">
// 🥇 Farm House Pizza
// <p>⭐4.9</p>
// <p>₹299</p>
// </div>
// <div className="seller-card">
// 🥈 Chicken Bucket
// <p>⭐4.8</p>
// <p>₹499</p>
// </div>
// <div className="seller-card">
// 🥉 Cheese Burger
// <p>⭐4.7</p>
// <p>₹199</p>
// </div>
// <div className="seller-card">
// 🏅 Veg Biryani
// <p>⭐4.8</p>
// <p>₹249</p>
// </div>
// </div>
// </section>
// <section className="stats-section">
// <h2>📊 FoodExpress Statistics</h2>
// <div className="stats-grid">
// <div className="stats-card">
//       🍽
//     <h3>500+</h3>
//     <p>Restaurants</p>
// </div>
// <div className="stats-card">
//       😊
//     <h3>10K+</h3>
//     <p>Happy Customers</p>
// </div>
// <div className="stats-card">
//       🛵
//     <h3>250+</h3>
//     <p>Delivery Partners</p>
// </div>
// <div className="stats-card">
//       ⭐
//     <h3>4.9</h3>
//     <p>Average Rating</p>
// </div>
// </div>
// </section>
// <section className="recommend-section">
// <h2>🎯 Recommended For You</h2>
// <div className="recommend-grid">
// <div className="recommend-card">
//       🍕
//     <h3>Margherita Pizza</h3>
//     <p>₹249</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     <div className="recommend-card">
//       🍔
//     <h3>Veg Burger</h3>
//     <p>₹179</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     <div className="recommend-card">
//       🍜
//     <h3>Chicken Noodles</h3>
//     <p>₹220</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     <div className="recommend-card">
//       🍰
//     <h3>Chocolate Cake</h3>
//     <p>₹150</p>
//     <button>Add to Cart 🛒</button>
//     </div>
//     </div>
//     </section>
// <section className="chef-section">
// <h2>👨‍🍳 Meet Our Top Chefs</h2>
// <div className="chef-grid">
// <div className="chef-card">
//       👨‍🍳
//     <h3>Chef Rahul</h3>
//     <p>Italian Specialist</p>
//     <p>⭐ 4.9</p>
//     </div>
//     <div className="chef-card">
//       👩‍🍳
//       <h3>Chef Priya</h3>
//       <p>Indian Cuisine</p>
//       <p>⭐ 4.8</p>
//     </div>
//     <div className="chef-card">
//       👨‍🍳
//       <h3>Chef Arjun</h3>
//       <p>Fast Food Expert</p>
//       <p>⭐ 4.9</p>
//     </div>
//     </div>
//     </section>
// <section className="delivery-section">
// <h2>🛵 Delivery Partners</h2>
// <div className="delivery-grid">
// <div className="delivery-card">
//       🚴 Rahul
//       <p>⭐ 4.8</p>
//       <p>Deliveries : 2500+</p>
//     </div>
//     <div className="delivery-card">
//       🛵 Akash
//       <p>⭐ 4.9</p>
//       <p>Deliveries : 3200+</p>
//     </div>
//     <div className="delivery-card">
//       🚴 Sneha
//       <p>⭐ 5.0</p>
//       <p>Deliveries : 2800+</p>
//     </div>
//     </div>
//     </section>
// <section className="premium-section">
// <div className="premium-card">
// <h2>💎 FoodExpress Gold</h2>
// <p>Unlimited Free Delivery</p>
// <p>Extra 20% Discounts</p>
// <p>Priority Customer Support</p>
// <button>Join Membership 👑</button>
// </div>
// </section>
// <section className="new-section">
// <h2>🆕 Newly Added Restaurants</h2>
// <div className="new-grid">
// <div className="new-card">
// 🌮 Taco Bell
// <p>⭐4.7</p>
// <p>20 mins</p>
// </div>
// <div className="new-card">
// 🍣 Sushi House
// <p>⭐4.8</p>
// <p>30 mins</p>
// </div>
// <div className="new-card">
// 🥙 Arabian Nights
// <p>⭐4.9</p>
// <p>25 mins</p>
// </div>
// <div className="new-card">
// 🥪 Subway
// <p>⭐4.8</p>
// <p>18 mins</p>
// </div>
// </div>
// </section>
// <section className="review-section">
// <h2>💬 Customer Reviews</h2>
// <div className="review-grid">
// <div className="review-card">
// 😊
// <h3>Rohit</h3>
// <p>"Amazing Food & Fast Delivery!"</p>
// ⭐⭐⭐⭐⭐
// </div>
// <div className="review-card">
// 😍
// <h3>Ananya</h3>
// <p>"Loved the Pizza Combo."</p>
// ⭐⭐⭐⭐⭐
// </div>
// <div className="review-card">
// 🤩
// <h3>Kiran</h3>
// <p>"Best Delivery Experience."</p>
// ⭐⭐⭐⭐☆
// </div>
// </div>
// </section>
// <form onSubmit={handleSubmit}>
// <Component1 />
// </form>
//       </div>
//         </div>
//         </AppContext.Provider>
// );}
// export default App;

// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Restaurants from "./pages/Restaurants";
// import Menu from "./pages/Menu";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import Profile from "./pages/Profile";
// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/restaurants" element={<Restaurants />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </main>
//       <Footer />
//       </div>
//   );}
// export default App;



//useParams Implementation
// import { Routes, Route, Navigate, Link } from "react-router-dom";
// import CustomerList from "./components/CustomerList";
// import CustomerDetails from "./components/CustomerDetails";
// import "./style.css";

// function App() {
//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         <div className="logoSection">
//           <div className="bankLogo">🏦</div>
//           <div>
//             <h2>National Bank</h2>
//             <p>Digital Banking</p>
//           </div>
//         </div>

//         <ul className="menu">
//           <li>
//             <Link to="/dashboard">📊 Dashboard</Link>
//           </li>
//           <li className="activeMenu">
//             <Link to="/customers">👥 Customers</Link>
//           </li>
//           <li>
//             <Link to="#">🏛️ Accounts</Link>
//           </li>
//           <li>
//             <Link to="#">💳 Cards</Link>
//           </li>
//           <li>
//             <Link to="#">🧾 Statements</Link>
//           </li>
//           <li>
//             <Link to="#">⚙️ Settings</Link>
//           </li>
//         </ul>

//         <div className="logoutBox">
//           <button className="logoutBtn">↩ Logout</button>
//         </div>
//       </aside>

//       <main className="mainContent">
//         <header className="topBar">
//           <div className="topBarLeft">
//             <h1>Customer Management</h1>
//             <p>Monitor banking activity and client profiles</p>
//           </div>

//           <div className="topBarRight">
//             <button className="iconBtn">🔔</button>
//             <button className="profileBtn">👤 Sai Lakshmi</button>
//           </div>
//         </header>

//         <div className="contentArea">
//           <Routes>
//             <Route path="/" element={<Navigate to="/customers" replace />} />
//             <Route path="/dashboard" element={<Navigate to="/customers" replace />} />
//             <Route path="/customers" element={<CustomerList />} />
//             <Route path="/customers/:id" element={<CustomerDetails />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;


//Custom Hook For API Integration
// import { useState } from "react";
// import "./style.css";
// import useFetchData from "./hooks/useFetchData";
// import DashboardHeader from "./components/DashboardHeader";
// import SearchBar from "./components/SearchBar";
// import EmployeeTable from "./components/EmployeeTable";

// function App() {
//   const { employees, loading, error } = useFetchData(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredEmployees = employees.filter((employee) => {
//     return (
//       employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       employee.username.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <div className="app-container">
//       <DashboardHeader totalEmployees={filteredEmployees.length} />

//       <SearchBar
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//       />

//       {loading && (
//         <div className="message">
//           <h2>Loading employee data...</h2>
//         </div>
//       )}

//       {error && (
//         <div className="message error">
//           <h2>{error}</h2>
//         </div>
//       )}

//       {!loading && !error && (
//         <>
//           {filteredEmployees.length > 0 ? (
//             <EmployeeTable employees={filteredEmployees} />
//           ) : (
//             <div className="message">
//               <h2>No employees found.</h2>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

//Tic tac toe game
// import { useState } from "react";
// import "./style.css";

// function App() {
//   // Game States
//   const [board, setBoard] = useState(Array(9).fill(""));
//   const [isXTurn, setIsXTurn] = useState(true);
//   const [winner, setWinner] = useState("");
//   const [winningCells, setWinningCells] = useState([]);

//   // Dashboard States
//   const [xScore, setXScore] = useState(0);
//   const [oScore, setOScore] = useState(0);
//   const [draws, setDraws] = useState(0);
//   const [coins, setCoins] = useState(1200);
//   const [level, setLevel] = useState(1);
//   const [xp, setXp] = useState(0);

//   const winningPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   const checkWinner = (newBoard) => {
//     for (let pattern of winningPatterns) {
//       const [a, b, c] = pattern;

//       if (
//         newBoard[a] &&
//         newBoard[a] === newBoard[b] &&
//         newBoard[a] === newBoard[c]
//       ) {
//         setWinner(newBoard[a]);
//         setWinningCells(pattern);

//         if (newBoard[a] === "X") {
//           setXScore((prev) => prev + 1);
//         } else {
//           setOScore((prev) => prev + 1);
//         }

//         setCoins((prev) => prev + 100);

//         setXp((prev) => {
//           const total = prev + 20;

//           if (total >= 100) {
//             setLevel((lvl) => lvl + 1);
//             return 0;
//           }

//           return total;
//         });

//         return;
//       }
//     }

//     if (!newBoard.includes("")) {
//       setWinner("Draw");
//       setDraws((prev) => prev + 1);
//     }
//   };

//   const handleClick = (index) => {
//     if (board[index] !== "" || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = isXTurn ? "X" : "O";

//     setBoard(newBoard);
//     checkWinner(newBoard);
//     setIsXTurn(!isXTurn);
//   };

//   const playAgain = () => {
//     setBoard(Array(9).fill(""));
//     setWinner("");
//     setWinningCells([]);
//     setIsXTurn(true);
//   };

//   const newMatch = () => {
//     playAgain();
//     setCoins(1200);
//     setLevel(1);
//     setXp(0);
//     setXScore(0);
//     setOScore(0);
//     setDraws(0);
//   };

//   return (
//     <div className="app">

//       {/* Mobile Phone */}
//       <div className="phone">

//         {/* Status Bar */}
//         <div className="status-bar">
//           <span>9:41</span>
//           <span>📶 WiFi 🔋100%</span>
//         </div>

//         {/* Top Bar */}
//         <div className="top-bar">
//           <button className="menu-btn">☰</button>

//           <h2>XO Royale
//           </h2>
//           <button className="setting-btn">⚙</button>
//         </div>

//         {/* Sidebar + Main Content */}
//         <div className="content">

//           {/* Sidebar */}
//           <div className="sidebar">

//             <div className="menu-item active">
//               🎮
//             </div>

//             <div className="menu-item">
//               🏆
//             </div>

//             <div className="menu-item">
//               💎
//             </div>

//             <div className="menu-item">
//               📊
//             </div>

//             <div className="menu-item">
//               🎵
//             </div>

//             <div className="menu-item">
//               ⚙
//             </div>

//           </div>

//           {/* Main Screen */}
//           <div className="main-screen">

//             {/* Player Card */}
//             <div className="profile-card">

//               <div className="avatar">
//                 💀
//               </div>

//               <div className="profile-info">
//                 <h3>Kushi Player</h3>
//                 <p>Level {level}</p>

//                 <div className="xp-bar">
//                   <div
//                     className="xp-fill"
//                     style={{ width: `${xp}%` }}
//                   ></div>
//                 </div>

//               </div>

//               <div className="coins">
//                 💎 {coins}
//               </div>

//             </div>
//             {/* Score Cards */}
//             <div className="score-board">

//               <div
//                 className={`score-card ${
//                   isXTurn && !winner ? "active-player" : ""
//                 }`}
//               >
//                 <h4>PLAYER X</h4>
//                 <h2 className="x-text">{xScore}</h2>
//               </div>

//               <div className="score-card draw-card">
//                 <h4>DRAWS</h4>
//                 <h2>{draws}</h2>
//               </div>

//               <div
//                 className={`score-card ${
//                   !isXTurn && !winner ? "active-player" : ""
//                 }`}
//               >
//                 <h4>PLAYER O</h4>
//                 <h2 className="o-text">{oScore}</h2>
//               </div>

//             </div>

//             {/* Turn / Winner */}

//             <div className="game-status">

//               {winner === "" ? (
//                 <h2>
//                   TURN :
//                   <span className={isXTurn ? "x-text" : "o-text"}>
//                     {" "}
//                     {isXTurn ? "PLAYER X" : "PLAYER O"}
//                   </span>
//                 </h2>
//               ) : winner === "Draw" ? (
//                 <h2 className="draw-text">
//                   🤝 MATCH DRAW
//                 </h2>
//               ) : (
//                 <h2 className="winner-text">
//                   🏆 PLAYER {winner} WINS
//                 </h2>
//               )}

//             </div>

//             {/* Tic Tac Toe Board */}

//             <div className="board">

//               {board.map((cell, index) => (

//                 <button
//                   key={index}
//                   className={`cell ${
//                     winningCells.includes(index)
//                       ? "winner-cell"
//                       : ""
//                   }`}
//                   onClick={() => handleClick(index)}
//                 >
//                   <span
//                     className={
//                       cell === "X"
//                         ? "x-text"
//                         : cell === "O"
//                         ? "o-text"
//                         : ""
//                     }
//                   >
//                     {cell}
//                   </span>

//                 </button>

//               ))}

//             </div>

//             {/* Buttons */}
// <div className="control-box">
//   <button className="play-btn" onClick={playAgain}>
//     🔄 Play Again
//   </button>

//   <button className="match-btn" onClick={newMatch}>
//     ⚡ New Match
//   </button>
// </div>
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;


//useSearchParams
// import { Routes, Route, Navigate } from "react-router-dom";
// import Jobs from "./jobs";

// function App() {
//   return (
//     <Routes>
//       {/* Redirect to first page */}
//       <Route path="/" element={<Navigate to="/jobs?page=1" replace />} />

//       {/* Job Portal Page */}
//       <Route path="/jobs" element={<Jobs />} />
//     </Routes>
//   );
// }

// export default App;


//CRUD Operation using API Integration
// import { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import MemberForm from "./components/memberform";
// import MemberTable from "./components/membertable";

// function App() {
//   const API = "https://jsonplaceholder.typicode.com/users";

//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [memberName, setMemberName] = useState("");
//   const [email, setEmail] = useState("");
//   const [membership, setMembership] = useState("");

//   const [editingId, setEditingId] = useState(null);

//   const [search, setSearch] = useState("");

//   // GET MEMBERS
//   useEffect(() => {
//     fetchMembers();
//   }, []);

//   const fetchMembers = async () => {
//     try {
//       const response = await fetch(API);
//       const data = await response.json();

//       // Convert API data into Gym Members
//       const gymMembers = data.map((member) => ({
//         id: member.id,
//         memberName: member.name,
//         email: member.email,
//         membership: member.company.name,
//       }));

//       setMembers(gymMembers);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ADD MEMBER
//   const addMember = async () => {
//     if (
//       memberName.trim() === "" ||
//       email.trim() === "" ||
//       membership.trim() === ""
//     ) {
//       alert("Please fill all fields.");
//       return;
//     }

//     const newMember = {
//       memberName,
//       email,
//       membership,
//     };

//     try {
//       const response = await fetch(API, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newMember),
//       });

//       const data = await response.json();

//       setMembers([
//         ...members,
//         {
//           ...data,
//           id: members.length + 1,
//         },
//       ]);

//       setMemberName("");
//       setEmail("");
//       setMembership("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // DELETE MEMBER
//   const deleteMember = async (id) => {
//     try {
//       await fetch(`${API}/${id}`, {
//         method: "DELETE",
//       });

//       setMembers(members.filter((member) => member.id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // EDIT MEMBER
//   const editMember = (member) => {
//     setEditingId(member.id);
//     setMemberName(member.memberName);
//     setEmail(member.email);
//     setMembership(member.membership);
//   };

//   // UPDATE MEMBER
//   const updateMember = async () => {
//     const updatedMember = {
//       memberName,
//       email,
//       membership,
//     };

//     try {
//       await fetch(`${API}/${editingId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedMember),
//       });

//       const updatedMembers = members.map((member) =>
//         member.id === editingId
//           ? {
//               ...member,
//               memberName,
//               email,
//               membership,
//             }
//           : member
//       );

//       setMembers(updatedMembers);

//       setEditingId(null);
//       setMemberName("");
//       setEmail("");
//       setMembership("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // CANCEL EDIT
//   const cancelEdit = () => {
//     setEditingId(null);
//     setMemberName("");
//     setEmail("");
//     setMembership("");
//   };

//   // SEARCH MEMBER
//   const filteredMembers = members.filter((member) =>
//     member.memberName.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="app">
//       <Navbar />

//       <div className="dashboard">

//         <div className="dashboard-top">

//           <div className="member-card">
//             <h2>Total Members</h2>
//             <h1>{filteredMembers.length}</h1>
//           </div>

//           <input
//             type="text"
//             placeholder="🔍 Search Member..."
//             className="search-box"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//         </div>

//         <MemberForm
//           memberName={memberName}
//           email={email}
//           membership={membership}
//           setMemberName={setMemberName}
//           setEmail={setEmail}
//           setMembership={setMembership}
//           editingId={editingId}
//           addMember={addMember}
//           updateMember={updateMember}
//           cancelEdit={cancelEdit}
//         />

//         {loading ? (
//           <h2 className="loading">Loading Gym Members...</h2>
//         ) : (
//           <MemberTable
//             members={filteredMembers}
//             deleteMember={deleteMember}
//             editMember={editMember}
//           />
//         )}

//       </div>
//     </div>
//   );
// }

// export default App;