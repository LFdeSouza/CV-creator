const CvWorkExperienceItem = ({
  position,
  company = "Company",
  workCity = "City",
  workFrom = "From",
  workTo = "to",
}) => (
  <div className="cv-experience-item">
    <div className="work-experience">
      <p>
        <strong>{`${workFrom} - ${workTo}`}</strong>
      </p>
    </div>
    <div className="position-company">
      <p>{position}</p>
      <p>{`${company}, ${workCity}`}</p>
    </div>
  </div>
);
export default CvWorkExperienceItem;
