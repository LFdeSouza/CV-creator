const CvHeader = ({
  name = "Full Name",
  title = "title",
  address = "address",
  phone = "phone",
  email = "email",
}) => {
  return (
    <header className="cv-header">
      <div className="cv-name-cotainer">
        <h2>{name}</h2>
        <p className="title">{title}</p>
      </div>
      <div className="other-info">
        <p>{`address: ${address}`}</p>
        <p>{`phone: ${phone}`}</p>
        <p>{`email: ${email}`}</p>
      </div>
    </header>
  );
};
export default CvHeader;
