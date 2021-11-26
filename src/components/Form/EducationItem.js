const EducationItem = ({ id, getInfo, onDelete }) => (
  <div id={id} className="forms">
    <input
      type="text"
      placeholder="University name"
      name="universityName"
      onChange={(e) =>
        getInfo(
          "education",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="City"
      name="universityCity"
      onChange={(e) =>
        getInfo(
          "education",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="Degree"
      name="degree"
      onChange={(e) =>
        getInfo(
          "education",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="Subject"
      name="subject"
      onChange={(e) =>
        getInfo(
          "education",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="From"
      name="studyFrom"
      onChange={(e) =>
        getInfo(
          "education",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <input
      type="text"
      placeholder="To"
      name="studyTo"
      onChange={(e) =>
        getInfo(
          "education",
          e.target.parentElement.id,
          e.target.name,
          e.target.value
        )
      }
    />
    <button
      className="btn"
      onClick={(e) => onDelete("education", e.target.parentElement.id)}
    >
      Delete
    </button>
  </div>
);

export default EducationItem;
