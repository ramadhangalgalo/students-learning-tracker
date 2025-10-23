import { useState } from "react";

function AddLearning({ addSubject }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    hoursDone: 0,
    totalHours: 0,
    status: "Not Started",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/subjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => addSubject(data));

    alert("New subject added!");
  }

  return (
    <div className="form-page">
      <h2>Add New Learning Item</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Subject Name" onChange={handleChange} required />
        <input name="category" placeholder="Category" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="hoursDone" type="number" placeholder="Hours Done" onChange={handleChange} />
        <input name="totalHours" type="number" placeholder="Total Hours" onChange={handleChange} required />
        <select name="status" onChange={handleChange}>
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button type="submit">Add Subject</button>
      </form>
    </div>
  );
}

export default AddLearning;

