import React, { useContext } from "react";
import AppContext from "../Context";
import Component2 from "./Component2";
function Component1() {
  const { formData, handleChange } = useContext(AppContext);
  return (
    <div className="form-section">
      <h2>Personal Information</h2>
    <div className="input-group">
    <div className="input-box">
      <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
        <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
        <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
        <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Component2 />
    </div>
  );}
export default Component1;