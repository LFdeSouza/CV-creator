const CvHeader = ({ name = "Full Name", title = "title" }) => (
  <header className="cv-header">
    <h2>{name}</h2>
    <p className="title">{title}</p>
  </header>
);
export default CvHeader;
