import EducationItem from "./EducationItem";

const Education = ({ educationData, getInfo, onDelete, onAdd }) => {
  return (
    <section className="form-sections education">
      <h2>Education</h2>
      {educationData.map((item) => (
        <EducationItem
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
export default Education;
