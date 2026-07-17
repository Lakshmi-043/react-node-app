import { useState } from "react";

export default function RegistrationForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // RESET FUNCTION
  const handleReset = () => {
    setForm(initialState);
    setErrors({});
  };

  const validate = () => {
    let temp = {};

    if (!form.firstName.trim()) temp.firstName = "Required";
    if (!form.lastName.trim()) temp.lastName = "Required";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) temp.email = "Required";
    else if (!emailPattern.test(form.email)) temp.email = "Invalid email";

    if (!form.mobile.match(/^[0-9]{10}$/)) temp.mobile = "10 digits required";

    if (form.password.length < 6) temp.password = "Min 6 chars";

    if (form.confirmPassword !== form.password)
      temp.confirmPassword = "Not matching";

    if (!form.dob) temp.dob = "Required";
    if (!form.gender) temp.gender = "Required";

    if (form.address.length < 10) temp.address = "Min 10 chars";
    if (!form.city.trim()) temp.city = "Required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
      console.log(form);
    }
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      {/* ROW 1 - 2:2 */}
      <div className="row">
        <div>
          <input name="firstName" placeholder="First Name" onChange={handleChange} value={form.firstName} />
          <p className="error">{errors.firstName}</p>
        </div>
        <div>
          <input name="lastName" placeholder="Last Name" onChange={handleChange} value={form.lastName} />
          <p className="error">{errors.lastName}</p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row">
        <div>
          <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
          <p className="error">{errors.email}</p>
        </div>
        <div>
          <input name="mobile" placeholder="Mobile" onChange={handleChange} value={form.mobile} />
          <p className="error">{errors.mobile}</p>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="row">
        <div>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} />
          <p className="error">{errors.password}</p>
        </div>
        <div>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={form.confirmPassword} />
          <p className="error">{errors.confirmPassword}</p>
        </div>
      </div>

      {/* ROW 4 */}
      <div className="row">
        <div>
          <input type="date" name="dob" onChange={handleChange} value={form.dob} />
          <p className="error">{errors.dob}</p>
        </div>
        <div>
          <select name="gender" onChange={handleChange} value={form.gender}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <p className="error">{errors.gender}</p>
        </div>
      </div>

      {/* ROW 5 - SINGLE */}
      <div className="row single">
        <div>
          <input name="address" placeholder="Address" onChange={handleChange} value={form.address} />
          <p className="error">{errors.address}</p>
        </div>
      </div>

      {/* ROW 6 - SINGLE */}
      <div className="row single">
        <div>
          <input name="city" placeholder="City" onChange={handleChange} value={form.city} />
          <p className="error">{errors.city}</p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="btn-row">
        <button type="submit">Register</button>
        <button type="button" className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}