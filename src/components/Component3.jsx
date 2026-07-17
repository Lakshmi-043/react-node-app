import React, { useContext } from "react";
import AppContext from "../Context";
function Component3() {
  const {
    formData,
    handleChange,
    resetForm,
  } = useContext(AppContext);
  return (
    <div className="form-section">
      <h2>Address Information</h2>
      <div className="input-group">
      <div className="input-box">
      <label>Address</label>
      <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="input-box">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter State"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="button-group">
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <button
          type="button"
          className="reset-btn"
          onClick={resetForm}
        >
          Reset
        </button>
      </div>
    </div>
  );}
export default Component3;
