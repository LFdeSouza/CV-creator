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
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const [cvData, setData] = useState(CvData);

  const getPersonalInfo = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      personal: { ...prevData.personal, [name]: value },
    }));
  };

  const updateDataField = (field, id, name, value) => {
    return cvData[field].map((item) => {
      if (item.id === id) return { ...item, [name]: value };
      return { ...item };
    });
  };

  const getInfo = (field, id, name, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: updateDataField(field, id, name, value),
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

  const addEducationField = () =>
    setData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
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
    }));

  const deleteFormField = (field, id) => {
    setData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field].filter((item) => item.id !== id)],
    }));
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="app">
      <Header />
      <section className="form-section">
        <Personal getInfo={getPersonalInfo} />
        <Experience
          experienceField={cvData.experience}
          onAdd={addExperienceField}
          onDelete={deleteFormField}
          getInfo={getInfo}
        />
        <Education
          educationData={cvData.education}
          onAdd={addEducationField}
          onDelete={deleteFormField}
          getInfo={getInfo}
          onPrint={handlePrint}
        />
      </section>

      <section ref={componentRef} className="cv-page">
        <CvHeader personalData={cvData.personal} />
        <CvDescription description={cvData.personal.description} />
        <CvWorkExperience workExperienceData={cvData.experience} />
        <CvEducation educationData={cvData.education} />
      </section>
    </div>
  );
}

export default App;
