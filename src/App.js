import "./App.css";
import Education from "./components/Form/Education";
import Personal from "./components/Form/PersonalInfo";
import Experience from "./components/Form/Experience";
import Header from "./components/Form/Header";
import CvHeader from "./components/CvPage/CvHeader";
import CvDescription from "./components/CvPage/CvDescription";

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
      </section>
    </div>
  );
}

export default App;
