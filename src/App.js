import Education from "./components/Form/Education";
import Personal from "./components/Form/PersonalInfo";
import Experience from "./components/Form/Experience";
import Header from "./components/Form/Header";
import CvHeader from "./components/CvPage/CvHeader";
import CvDescription from "./components/CvPage/CvDescription";
import CvWorkExperience from "./components/CvPage/CvWorkExperience";
import CvEducation from "./components/CvPage/CvEducation";
import CvData from "./components/CvPage/CvData";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [cvData, setData] = useState(CvData);

  const getPersonalInfo = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      personal: { ...prevData.personal, [name]: value },
    }));
  };

  const addExperienceField = () =>
    setData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          id: uuidv4(),
          position: "Position",
          company: "Company",
          workCity: "City",
          workFrom: "From",
          workTo: "To",
        },
      ],
    }));

  const deleteExperienceField = (id) => {
    setData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience.filter((field) => field.id !== id)],
    }));
  };

  return (
    <div className="app">
      <Header />
      <section className="form-section">
        <Personal getInfo={getPersonalInfo} />
        <Experience
          experienceField={cvData.experience}
          onAdd={addExperienceField}
          onDelete={deleteExperienceField}
        />
        {/* <Education getInfo={getInfo} /> */}
      </section>

      <section className="cv-page">
        <CvHeader
          name={cvData.personal.name}
          title={cvData.personal.title}
          address={cvData.personal.address}
          phone={cvData.personal.phone}
          email={cvData.personal.email}
        />
        <CvDescription description={cvData.personal.description} />
        <h2>Work Experience</h2>
        <CvWorkExperience
          position={cvData.experience.position}
          company={cvData.experience.company}
          workCity={cvData.experience.workCity}
          workFrom={cvData.experience.workFrom}
          workTo={cvData.experience.workTo}
        />
        <h2>Education</h2>
        <CvEducation
          universityName={cvData.education.universityName}
          universityCity={cvData.education.universityCity}
          degree={cvData.education.degree}
          subject={cvData.education.subject}
          studyFrom={cvData.education.studyFrom}
          studyTo={cvData.education.studyTo}
        />
      </section>
    </div>
  );
}

export default App;
