import { v4 as uuidv4 } from "uuid";

const CvData = {
  personal: {},
  experience: [
    {
      id: uuidv4(),
      position: "Position",
      company: "Company",
      workCity: "City",
      workFrom: "From",
      workTo: "To",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "University",
      universityCity: "City",
      degree: "Degree",
      subject: "Subject",
      studyFrom: "From",
      studyTo: "to",
    },
  ],
};
export default CvData;
