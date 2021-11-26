const CvEducationItem = ({
  studyFrom,
  studyTo,
  universityName,
  universityCity,
  degree,
  subject,
}) => (
  <div className="education-item">
    <div className="work-experience">
      <p>
        <strong>{`${studyFrom} - ${studyTo}`}</strong>
      </p>
    </div>
    <div className="position-company">
      <p>{`${universityName}, ${universityCity}`}</p>
      <p>{`${degree}: ${subject}`}</p>
    </div>
  </div>
);

export default CvEducationItem;
