import ExperienceItem from "./ExperienceItem";

const Experience = ({ experienceField, onAdd, onDelete, getInfo }) => {
  return (
    <section className="experience">
      <h2>Work experience</h2>
      {experienceField.map((item) => (
        <ExperienceItem
          key={item.id}
          id={item.id}
          onDelete={onDelete}
          getInfo={getInfo}
        />
      ))}
      <button className="btn" onClick={onAdd}>
        Add
      </button>
    </section>
  );
};
export default Experience;
