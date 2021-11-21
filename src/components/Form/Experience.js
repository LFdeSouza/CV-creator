const Experience = ({ getInfo }) => {
  return (
    <section className="form-sections experience">
      <h2>Work experience</h2>
      <input
        type="text"
        placeholder="Position"
        name="position"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        name="company"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        name="workCity"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="From"
        name="workFrom"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="To"
        name="workTo"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <button className="btn">Delete</button>
      <button className="btn">Add</button>
    </section>
  );
};
export default Experience;
