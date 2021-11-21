import Education from "./components/Form/Education";
import Personal from "./components/Form/PersonalInfo";
import Experience from "./components/Form/Experience";
import Header from "./components/Form/Header";
import CvHeader from "./components/CvPage/CvHeader";
import CvDescription from "./components/CvPage/CvDescription";
import CvWorkExperience from "./components/CvPage/CvWorkExperience";
import CvEducation from "./components/CvPage/CvEducation";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([]);

  const getInfo = (name, value) => {
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  return (
    <div className="app">
      <Header />
      <section className="form-section">
        <Personal getInfo={getInfo} />
        <Experience getInfo={getInfo} />
        <Education getInfo={getInfo} />
      </section>

      <section className="cv-page">
        <CvHeader
          name={info.name}
          title={info.title}
          address={info.address}
          phone={info.phone}
          email={info.email}
        />
        <CvDescription description={info.description} />
        <h2>Work Experience</h2>
        <CvWorkExperience
          position={info.position}
          company={info.company}
          workCity={info.workCity}
          workFrom={info.workFrom}
          workTo={info.workTo}
        />
        <h2>Education</h2>
        <CvEducation
          universityName={info.universityName}
          universityCity={info.universityCity}
          degree={info.degree}
          subject={info.subject}
          studyFrom={info.studyFrom}
          studyTo={info.studyTo}
        />
      </section>
    </div>
  );
}

export default App;
