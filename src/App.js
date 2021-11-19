import "./App.css";
import Education from "./components/Form/Education";
import Personal from "./components/Form/PersonalInfo";
import Experience from "./components/Form/Experience";
import Header from "./components/Form/Header";
import CvHeader from "./components/CvPage/CvHeader";
import CvDescription from "./components/CvPage/CvDescription";
import CvWorkExperience from "./components/CvPage/CvWorkExperience";
import CvEducation from "./components/CvPage/CvEducation";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="form-section">
        <Personal />
        <Experience />
        <Education />
      </section>

      <section className="cv-page">
        <CvHeader />
        <CvDescription />
        <h2>Work Experience</h2>
        <CvWorkExperience />
        <h2>Education</h2>
        <CvEducation />
      </section>
    </div>
  );
}

export default App;
