import ExperienceItem from "./ExperienceItem";

const Experience = ({ experienceField, onAdd }) => {
  return (
    <section className="experience">
      <h2>Work experience</h2>
      {experienceField.map((item) => (
        <ExperienceItem key={item.id} id={item.id} />
      ))}
      <button className="btn" onClick={onAdd}>
        Add
      </button>
    </section>
  );
};
export default Experience;
