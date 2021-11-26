const CvHeader = ({ personalData }) => {
  return (
    <header className="cv-header">
      <div className="cv-name-cotainer">
        <h2>{personalData.name}</h2>
        <p className="title">{personalData.title}</p>
      </div>
      <div className="other-info">
        <p>{`address: ${personalData.address}`}</p>
        <p>{`phone: ${personalData.phone}`}</p>
        <p>{`email: ${personalData.email}`}</p>
      </div>
    </header>
  );
};
export default CvHeader;
