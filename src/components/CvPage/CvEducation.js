const CvEducation = ({
  universityName = "University Name",
  universityCity = "City",
  degree = "Degree",
  subject = "Subject",
  studyFrom = "From",
  studyTo = "To",
}) => {
  return (
    <section className="cv-education-container">
      <div className="work-experience">
        <p>
          <strong>{`${studyFrom} - ${studyTo}`}</strong>
        </p>
      </div>
      <div className="position-company">
        <p>{`${universityName}, ${universityCity}`}</p>
        <p>{`${degree}: ${subject}`}</p>
      </div>
    </section>
  );
};
export default CvEducation;
