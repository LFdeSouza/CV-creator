import CvWorkExperienceItem from "./CvWorkExperienceItem";

const CvWorkExperience = ({ workExperienceData }) => {
  return (
    <section className="cv-experience-container">
      <h2>Work Experience</h2>
      {workExperienceData.map((item) => (
        <CvWorkExperienceItem
          key={item.id}
          position={item.position}
          company={item.company}
          workCity={item.workCity}
          workFrom={item.workFrom}
          workTo={item.workTo}
        />
      ))}
    </section>
  );
};
export default CvWorkExperience;
