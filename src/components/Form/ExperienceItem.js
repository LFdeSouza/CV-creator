const ExperienceItem = (id, onAdd) => (
  <div className="forms">
    <input
      id={id}
      type="text"
      placeholder="Position"
      name="position"
      //   onChange={(e) => getInfo(e.target.name, e.target.value)}
    />
    <input
      id={id}
      type="text"
      placeholder="Company"
      name="company"
      //   onChange={(e) => getInfo(e.target.name, e.target.value)}
    />
    <input
      id={id}
      type="text"
      placeholder="City"
      name="workCity"
      //   onChange={(e) => getInfo(e.target.name, e.target.value)}
    />
    <input
      id={id}
      type="text"
      placeholder="From"
      name="workFrom"
      //   onChange={(e) => getInfo(e.target.name, e.target.value)}
    />
    <input
      id={id}
      type="text"
      placeholder="To"
      name="workTo"
      //   onChange={(e) => getInfo(e.target.name, e.target.value)}
    />
    <button className="btn">Delete</button>
  </div>
);

export default ExperienceItem;
