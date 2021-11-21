const CvWorkExperience = ({
  position = "Position",
  company = "Company",
  workCity = "City",
  workFrom = "From",
  workTo = "to",
}) => {
  return (
    <section className="cv-experience-container">
      <div className="work-experience">
        <p>
          <strong>{`${workFrom} - ${workTo}`}</strong>
        </p>
      </div>
      <div className="position-company">
        <p>{position}</p>
        <p>{`${company}, ${workCity}`}</p>
      </div>
    </section>
  );
};
export default CvWorkExperience;
