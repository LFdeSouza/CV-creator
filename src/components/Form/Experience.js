const Experience = () => {
  return (
    <section className="form-sections experience">
      <h2>Work experience</h2>
      <input type="text" placeholder="Position" />
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="From" />
      <input type="text" placeholder="To" />
      <button className="btn">Delete</button>
      <button className="btn">Add</button>
    </section>
  );
};
export default Experience;
