import CvEducationItem from "./cvEducationItem";

const CvEducation = ({ educationData }) => {
  return (
    <section className="cv-education-container">
      <h2>Education</h2>
      {educationData.map((item) => (
        <CvEducationItem
          key={item.id}
          data={item}
          studyFrom={item.studyFrom}
          studyTo={item.studyTo}
          universityName={item.universityName}
          universityCity={item.universityCity}
          degree={item.degree}
          subject={item.subject}
        />
      ))}
    </section>
  );
};
export default CvEducation;
