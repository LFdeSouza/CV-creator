const CvDescription = ({ description }) => {
  return <p className="cv-description">{description}</p>;
};
export default CvDescription;

CvDescription.defaultProps = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
