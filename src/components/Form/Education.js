const Education = ({ getInfo }) => {
  return (
    <section className="form-sections education">
      <h2>Education</h2>
      <input
        type="text"
        placeholder="University name"
        name="universityName"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="City"
        name="universityCity"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="From"
        name="studyFrom"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <input
        type="text"
        placeholder="To"
        name="studyTo"
        onChange={(e) => getInfo(e.target.name, e.target.value)}
      />
      <button className="btn">Delete</button>
      <button className="btn">Add</button>
    </section>
  );
};
export default Education;
