import React, { useContext } from "react";
import AppContext from "../Context";
import Component3 from "./Component3";
function Component2() {
  const { formData, handleChange } = useContext(AppContext);
  return (
    <div className="form-section">
      <h2>Account Information</h2>
    <div className="input-group">
    <div className="input-box">
    <label>Password</label>
    <input
    type="password"
    name="password"
    placeholder="Enter Password"
    value={formData.password}
    onChange={handleChange}
    required
    />
    </div>
    <div className="input-box">
    <label>Confirm Password</label>
    <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
      </div>
      <div className="input-box">
        <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
        <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <Component3 />
    </div>
  );}
export default Component2;
