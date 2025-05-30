import { useState } from "react";

export default function DisplayName() {
  const [displayForm, setDisplayForm] = useState({
    firstName: "",
    lastName: "",
  });

  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setDisplayForm({
      ...displayForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    setFormData(`${displayForm.firstName}, ${displayForm.lastName}`)
    setDisplayForm({ firstName: "", lastName: "" })

  };

  return (
    <>
      <div
        style={{
          display: "block",
        }}
      >
        <form onSubmit={submitData}>
          <label htmlFor="">First Name:</label>

          <input
            type="text"
            name="firstName"
            value={displayForm.firstName}
            onChange={handleChange}
            required
          />

          <br />

          <label>Last Name:</label>

          <input
            type="text"
            name="lastName"
            value={displayForm.lastName}
            onChange={handleChange}
            required
          />

          <br />

          <button>Submit</button>
        </form>
           {formData && <p>Full Name: {formData}</p>}
       
      </div>
    </>
  )
}



